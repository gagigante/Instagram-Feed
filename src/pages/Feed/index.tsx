import React, {useState, useEffect, useCallback} from 'react';

import {View, FlatList} from 'react-native';

import LazyImage from '../../components/LazyImage';

import {Post, Header, Avatar, Name, Description, Loading} from './styles';

interface Feed {
  id: number;
  image: string;
  small: string;
  aspectRatio: number;
  description: string;
  authorId: number;
  author: Author;
}

interface Author {
  id: number;
  name: string;
  avatar: string;
}

export default function Feed() {
  const [feed, setFeed] = useState<Feed[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState<Object[]>([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) {
      return;
    }

    setLoading(true);

    const response = await fetch(
      `http://10.0.2.2:3333/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );

    const totalItens = response.headers.get('X-Total-Count');
    const data = await response.json();

    setLoading(false);
    setTotal(Math.floor(totalItens / 4));
    setPage(pageNumber + 1);

    setFeed(shouldRefresh ? data : [...feed, ...data]);
  }

  const refreshList = useCallback(async () => {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }, [setRefreshing, loadPage]);

  useEffect(() => {
    loadPage();
  }, []);

  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({item}) => item.id));
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 20}}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Avatar source={{uri: item.author.avatar}} />
              <Name>{item.author.name}</Name>
            </Header>
            <LazyImage
              shouldLoad={viewable.includes(item.id)}
              aspectRatio={item.aspectRatio}
              ratio={item.aspectRatio}
              smallSource={{uri: item.small}}
              source={{uri: item.image}}
            />
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}

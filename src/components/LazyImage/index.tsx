import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import {Small, Original} from './styles';

const AnimatedOriginal = Animated.createAnimatedComponent(Original);

interface LazyImageProps {
  smallSource: object;
  source: object;
  ratio: number;
  shouldLoad: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  smallSource,
  source,
  ratio,
  shouldLoad,
}) => {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={smallSource}
      ratio={ratio}
      resizeMode="contain"
      blurRadius={2}>
      {loaded && (
        <AnimatedOriginal
          style={{opacity}}
          source={source}
          ratio={ratio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
};

export default LazyImage;

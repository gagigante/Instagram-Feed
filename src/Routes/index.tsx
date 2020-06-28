import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import logo from '../assets/instagram.png';

import Feed from '../pages/Feed';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerLeft: () => (
            <Image
              source={logo}
              style={{marginLeft: 12}}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTitle: '',
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

export default Routes;

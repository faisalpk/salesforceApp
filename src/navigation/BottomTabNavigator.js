import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from './TabBarIcon';
import HomeScreen from '../containers/Main/screens/HomeScreen';

//import Trainings from '../containers/Main/screens/Trainings';
//import ChatView from '../containers/Main/screens/ChatView';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: {
      backgroundColor: '#297db6',
    },
    headerTintColor: '#fff',
  });

  return (
    <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <Tab.Screen
        name="Links"
        component={HomeScreen}
        options={{
          title: 'Trainings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home Page';
    case 'Links':
      return 'Tap to learn more';
    case 'Message':
      return 'Messages here';
  }
}

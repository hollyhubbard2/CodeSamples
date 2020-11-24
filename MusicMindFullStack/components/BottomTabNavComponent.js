import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseComponent from './BaseComponent';
import DiscoverComponent from './DiscoverComponent';
import LibraryComponent from './LibraryComponent';

const Tab = createBottomTabNavigator();

export default function BottomTabNavComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                ? 'ios-home'
                : 'ios-home';
              } else if (route.name === 'Discover') {
                iconName = focused ? 'ios-search' : 'ios-search';
              } else if (route.name === 'Library') {
                iconName = focused ? 'ios-radio' : 'ios-radio';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff5bff',
            inactiveTintColor: 'black',
            style: { backgroundColor: '#343434' }
          }}
      >
        <Tab.Screen 
            name="Home" 
            component={BaseComponent} 
        />
        <Tab.Screen 
            name="Discover" 
            component={DiscoverComponent} 
        />
        <Tab.Screen 
            name="Library" 
            component={LibraryComponent} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

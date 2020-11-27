import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeComponent from './HomeComponent';
import PostComponent from './PostComponent';
import NotificationsComponent from './NotificationsComponent';
import ProfileComponent from './ProfileComponent';
import ExploreComponent from './ExploreComponent';
import {PROFILE} from '../mockdata/instaProfile';


const Tab = createBottomTabNavigator();

export default function NavBarComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                ? 'home'
                : 'home';
              } else if (route.name === 'Explore') {
                iconName = focused ? 'magnify' : 'magnify';
              } else if (route.name === 'Post') {
                iconName = focused ? 'camera' : 'camera';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'heart-outline' : 'heart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account' : 'account';
              }
              
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#aabb97',
            inactiveTintColor: '#29434e',
            style: { backgroundColor: '#ffffff' }
          }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeComponent} 
        />
        <Tab.Screen 
            name="Explore" 
            component={ExploreComponent} 
        />
        <Tab.Screen 
            name="Post" 
            component={PostComponent} 
        />
        <Tab.Screen 
            name="Notifications" 
            component={NotificationsComponent} 
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfileComponent} 
            initialParams={PROFILE}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

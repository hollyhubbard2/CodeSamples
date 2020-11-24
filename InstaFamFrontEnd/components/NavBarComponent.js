import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
                ? 'ios-home'
                : 'ios-home';
              } else if (route.name === 'Explore') {
                iconName = focused ? 'ios-search' : 'ios-search';
              } else if (route.name === 'Post') {
                iconName = focused ? 'ios-radio' : 'ios-radio';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'ios-radio' : 'ios-radio';
              } else if (route.name === 'Profile') {
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
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

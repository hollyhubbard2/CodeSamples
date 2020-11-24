import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import NavBarComponent from './components/NavBarComponent';

export default function App() {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
            <HeaderComponent></HeaderComponent>
        </View>
        <View style={{flex: 9}}>
            <NavBarComponent></NavBarComponent>
        </View>
    </View>
  );
}


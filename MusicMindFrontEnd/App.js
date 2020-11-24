import 'react-native-gesture-handler';
import React from 'react';
import { View, ScrollView, SafeAreaView} from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import BottomTabNavComponent from './components/BottomTabNavComponent';
import NowPlayComponent from './components/NowPlayComponent';



function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HeaderComponent></HeaderComponent>
      </View>
      <View style={{flex: 9}}>
        <BottomTabNavComponent></BottomTabNavComponent>
      </View>
      <View style={{flex: 1}}>
        <NowPlayComponent></NowPlayComponent>
      </View>
        
    </View>
  );
}


export default App;

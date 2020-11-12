import React from 'react';
import {View, Text} from 'react-native';
import AnimalComponent from './AnimalComponent';
import MissionComponent from './MissionComponent';
import AboutComponent from './AboutComponent';
import "../styles/coreStyles.css"

const BaseComponent = () =>{
    return(
        <View>
            <View>
                <AnimalComponent></AnimalComponent>
            </View>
            <View>
                <MissionComponent></MissionComponent>
            </View>
            <View>
                <AboutComponent></AboutComponent>
            </View> 
        </View>
       
           
    );

}


export default BaseComponent;
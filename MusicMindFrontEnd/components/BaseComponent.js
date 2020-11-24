import React, { Component } from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import RecentPlayComponent from './RecentPlayComponent';
import FavoritePlayComponent from './FavoritePlayComponent';
import SuggestedPlayComponent from './SuggestedPlayComponent';
import GenrePlayComponent from './GenrePlayComponent';
import styles from '../constants/musicmain';
import NewReleasePlayComponent from './NewReleasePlayComponent';

class BaseComponent extends Component{
    render() {
        return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>    
                <View style={styles.baseContainer}>
                    <RecentPlayComponent></RecentPlayComponent>
                    <FavoritePlayComponent></FavoritePlayComponent>
                    <SuggestedPlayComponent></SuggestedPlayComponent>
                    <NewReleasePlayComponent></NewReleasePlayComponent>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
   

}

export default BaseComponent;
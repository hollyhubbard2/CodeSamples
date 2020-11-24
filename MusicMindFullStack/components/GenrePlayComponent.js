import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/musicmain';
import ALBUMS from '../mockdata/albumDetails';

const renderItem = ({ item }) => {
    return(
        <View style={styles.rowPlay}>
            <View style={styles.album}>
                <Image
                    style={styles.albumImage}
                    source={item.albumCover}
                />
                <Text style={styles.albumText}>{item.albumTitle}</Text>
                <Text style={styles.albumText}>{item.artistName}</Text>
            </View>
        </View>
    );

}

class GenrePlayComponent extends Component{
    render(){
        return(

            <View>
                <Text style={styles.playName}>Genre</Text>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={ALBUMS}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
            
        );

    }


}
export default GenrePlayComponent;
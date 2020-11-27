import React, { useState } from 'react';
import { View , ScrollView, SafeAreaView, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import styles from '../constants/instaStyles';
import POSTS from '../mockdata/instaMock';

const Item = ({ squost }) => (

    <View style={styles.rowGrid}>
        <Image
            style={styles.gridImage}
            source= {squost.userAvatar}
        />
    </View>
    
);

const ExploreComponent = () => {

    const [text, setText] = useState('');

    const renderItem = ({ item }) => (
        <Item squost={item} />
      );

    return ( 
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>    
                <View style={styles.baseContainer}>
                    <View style={styles.exploreSearchContainer}>
                        <TextInput
                            style={styles.exploreSearchBar}
                            placeholder="Search"
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                        />
                    </View>
                    <View style={{flex: 1,}}>
                        <SafeAreaView style={{flex: 1}}>
                            <FlatList
                                data={POSTS}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal={false}
                                numColumns={3}
                            />
                        </SafeAreaView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  
};

export default ExploreComponent;
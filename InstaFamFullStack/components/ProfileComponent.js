import React, { useState } from 'react';
import { View , ScrollView, SafeAreaView, Text, FlatList, Image,} from 'react-native';
import styles from '../constants/instaStyles';
import {PROSTORY, PROPOST, PROFILE} from '../mockdata/instaProfile';

const Item = ({ prost }) => (

    <View style={styles.rowGrid}>
        <Image
            style={styles.gridImage}
            source= {prost.postPhoto}
        />
    </View>
    
);

const Story = ({ prost }) => (

    <View style={styles.profileStoryRow}>
        <View style={styles.rowCenter}>
            <Image
                style={styles.profileStoryImage}
                source= {prost.storyAvatar}
            />
            <Text style={styles.profileStoryText}>{prost.storyTitle}</Text>
        </View>
    </View>
    
);

const Bio = ({ prost }) => (

    <View style={{flex: 1,}}>
         <View style={{flex: 1, flexDirection: 'row', padding: 10,}}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.profileImage}
                    source= {prost.userAvatar}
                /> 
            </View>
            <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.profileText1}>{prost.userPostCount}</Text>
                    <Text style={styles.profileText1}>Posts</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.profileText1}>{prost.userFollowerCount}</Text>
                    <Text style={styles.profileText1}>Followers</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.profileText1}>{prost.userFollowingCount}</Text>
                    <Text style={styles.profileText1}>Following</Text>
                </View>
            </View>
        </View>
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={styles.profileText2}>{prost.userName}</Text>
                <Text style={styles.profileText2}>{prost.userCategory}</Text>
                <Text style={styles.profileText2}>{prost.userBiography}</Text>
            </View>
        </View>
    </View>
    
);

const ProfileComponent = () => {

    const renderItem = ({ item }) => (
        <Item prost={item} />
    );
    
    const renderStory = ({ item }) => (
        <Story prost={item} />
    );

    const renderBio = ({ item }) => (
        <Bio prost={item} />
    );

    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView showsVerticalScrollIndicator={false}>    
                <View style={styles.baseContainer}>
                    <View style={{flex: 1,}}>
                        <SafeAreaView style={{flex:1}}>
                            <FlatList
                                data={PROFILE}
                                renderItem={renderBio}
                                keyExtractor={(item) => item.id}
                                
                            />
                        </SafeAreaView>
                    </View>
                    <View style={{flex: 1,}}>
                        <SafeAreaView style={{flex:1}}>
                            <FlatList
                                data={PROSTORY}
                                renderItem={renderStory}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </SafeAreaView>
                    </View>
                    <View style={{flex: 1,}}>
                        <SafeAreaView style={{flex: 1}}>
                            <FlatList
                                data={PROPOST}
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

export default ProfileComponent;
import 'react-native-gesture-handler';
import React from 'react';
import { View , ScrollView, SafeAreaView} from 'react-native';
import StoryFeedComponent from './StoryFeedComponent';
import PostFeedComponent from './PostFeedComponent';
import FollowFeedComponent from './FollowFeedComponent';
import styles from '../constants/instaStyles';
import '../constants/coreStyle.css';

const HomeComponent = () => {
  return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>    
                <View style={styles.baseContainer}>
                    <StoryFeedComponent></StoryFeedComponent>
                    <View style={{flex: 4, flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <PostFeedComponent></PostFeedComponent>
                        </View>
                        <View style={{flex: 1}}>
                            <FollowFeedComponent></FollowFeedComponent>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
}

export default HomeComponent;
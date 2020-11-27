import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/instaStyles';
import POSTS from '../mockdata/instaMock';


const renderStory = ({ item }) => {
    return(
        <View style={styles.rowStory}>
            <View style={styles.rowCenter}>
                <Image
                    style={styles.storyImage}
                    source= {item.userAvatar}
                />
                <Text style={styles.storyText}>{item.userHandle}</Text>
            </View>
        </View>
    );

}

class StoryFeedComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          feedStory: POSTS
        };
    }

    render(){
        return(

            <View>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.feedStory}
                        renderItem={renderStory}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
            
        );

    }


}

export default StoryFeedComponent;
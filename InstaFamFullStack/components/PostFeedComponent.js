import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/instaStyles';
import POSTS from '../mockdata/instaMock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, } from '@fortawesome/free-regular-svg-icons';

const renderPost = ({ item }) => {
    return(
        <View style={styles.rowPost}>
            
            <View style={styles.postCard}>
                <View style={{flex:1, flexDirection: 'row', marginBottom: 10,}}>
                    <Image
                        style={styles.postImage}
                        source= {item.userAvatar}
                    />
                    <Text style={styles.postText}>{item.userHandle}</Text>
                </View>
                
                <Image
                    style={styles.postImage2}
                    source={item.postPhoto}
                />
                <View style={{flex:1, flexDirection: 'row', }}>
                    <FontAwesomeIcon icon={ faHeart } style={styles.headerArrow} size={'2vw'}/>
                    <Text style={styles.postText2}>{item.postLikes} Likes</Text>
                </View>
                
                <Text style={styles.postText3}>{item.postCaption}</Text>
            </View>
            
        </View>
    );

}

class PostFeedComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          feedPost: POSTS
        };
    }
    
    render(){
        return(

            <View>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.feedPost}
                        renderItem={renderPost}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
            
        );

    }


}

export default PostFeedComponent;
import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView, Button, Alert} from 'react-native';
import styles from '../constants/instaStyles';
import POSTS from '../mockdata/instaMock';


const renderFollow = ({ item }) => {
    return(
        <View style={styles.rowFollow}>
            <View style={styles.followCard}>
                <Image
                    style={styles.followImage}
                    source= {item.userAvatar}
                />
                <Text style={styles.followText}>{item.userHandle}</Text>
                <Button
                    title="Follow"
                    onPress={() => Alert.alert('Follow Me Button Pressed')}
                />
            </View>
        </View>
    );

}

class FollowFeedComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          feedFollow: POSTS
        };
    }
    
    render(){
        return(

            <View>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.feedFollow}
                        renderItem={renderFollow}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
            
        );

    }


}

export default FollowFeedComponent;
import 'react-native-gesture-handler';
import React from 'react';
import { View , ScrollView, SafeAreaView, Text, Image, FlatList} from 'react-native';
import styles from '../constants/instaStyles';
import POSTS from '../mockdata/instaMock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, } from '@fortawesome/free-regular-svg-icons';

const Item = ({ notific }) => (
    <View style={styles.notifiContainer}>
        <View style={{flex:6, flexDirection: 'row', paddingLeft: 10,}}>
            <Image
                style={styles.notifiImage}
                source= {notific.userAvatar}
            />
            <Text style={styles.notifiText2}>{notific.userHandle} Liked Your Post</Text>
        </View>
        <View style={{flex:1}}>
          <FontAwesomeIcon icon={ faHeart } style={styles.headerArrow} size={'2.5vw'}/>
        </View>
    </View>
  );
  

const NotificationsComponent = () => {

    const renderItem = ({ item }) => (
        <Item notific={item} />
      );
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>    
                <View style={styles.baseContainer}>
                    <Text style={styles.notifiText}>Notifications</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <SafeAreaView style={{flex: 1}}>
                                <FlatList
                                    data={POSTS}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotificationsComponent;
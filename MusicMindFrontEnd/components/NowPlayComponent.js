import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../constants/musicmain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlayCircle, faHeart } from '@fortawesome/free-regular-svg-icons';


class NowPlayComponent extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.nowContainer}>
                    <View>
                        <FontAwesomeIcon icon={ faHeart } style={styles.nowText1} size={'5vh'} />
                    </View>
                    <View style={styles.nowSongCon}>
                        <View style={styles.rowItem}>
                            <Text style={styles.nowText2}>Song Title</Text>
                            <Text style={styles.nowText2}>Artist Name</Text>
                        </View>
                        <View style={styles.rowItem}>
                            <Text style={styles.nowText3}>Now Playing</Text>
                        </View>
                        
                    </View>
                    <View>
                        <FontAwesomeIcon icon={ faPlayCircle } style={styles.nowText1} size={'5vh'} />
                    </View>
                </View>
                <View style={{flex:1}}>
                    <View style={{width: '100%', backgroundColor:'#373737', height: '100%'}}>
                        <View style={{width: '40%', backgroundColor:'#bf5f82', height: '100%'}}></View>
                    </View>
                </View>
            </View>
                
            
            
            
        );
    }

}

export default NowPlayComponent;
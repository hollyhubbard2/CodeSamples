import React, { Component } from 'react';
import { View, Image} from 'react-native';
import styles from '../constants/musicmain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerItem}>
          <Image
              style={styles.headerLogo}
              source={{uri: 'https://logos-download.com/wp-content/uploads/2016/09/Apple_Music_logo_black.png'}}
          />
        </View>
        <View>
          <FontAwesomeIcon icon={ faCogs } style={styles.headerText} size={32}/>
        </View>
      </View>
    );
  }
}


export default HeaderComponent;
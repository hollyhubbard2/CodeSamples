import React, { Component } from 'react';
import { View, Image} from 'react-native';
import styles from '../constants/musicmain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';


class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerItem}>
          <Image
              style={styles.headerLogo}
              source={{uri: 'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-10.png'}}
          />
        </View>
        <View>
          <FontAwesomeIcon icon={ faLocationArrow } style={styles.headerText} size={32}/>
        </View>
      </View>
    );
  }
}


export default HeaderComponent;
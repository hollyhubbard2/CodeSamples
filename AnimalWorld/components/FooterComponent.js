import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterComponent = () =>{
    return(
        <View style={styles.container}>
            <View><Text style={styles.footText}>Home</Text></View>
            <View><Text style={styles.footText}>About Us</Text></View>
            <View><Text style={styles.footText}>Our Mission</Text></View>
            <View><Text style={styles.footText}>Contact Us</Text></View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: '#1b5e20',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10,
    },
    footText: {
        color: 'white',
        fontSize: '2vw',
        fontWeight: '300',
    },
  });

export default FooterComponent;
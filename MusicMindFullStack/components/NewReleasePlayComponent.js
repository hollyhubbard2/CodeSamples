import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/musicmain';

const renderItem = ({ item }) => {
    return(
        <View style={styles.rowPlay}>
            <View style={styles.album}>
                <Image
                    style={styles.albumImage}
                    source= {{uri: `http://direct.rhapsody.com/imageserver/v2/albums/${item.id}/images/300x300.jpg` }}
                />
                <Text style={styles.albumText}>{item.name}</Text>
                <Text style={styles.albumText}>{item.artistName}</Text>
            </View>
        </View>
    );

}

class NewReleasePlayComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          newRelP: []
        };
    }
    componentDidMount() {
        fetch("https://api.napster.com/v2.2/albums/new?apikey=ODQ1YjlmYzgtNTQ2OS00N2VhLTk1OGUtMTg3N2NmNjc1YTI5&pretty=true")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                newRelP: result.albums
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    render(){
        return(
            <View>
                <Text style={styles.playName}>New Releases</Text>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.newRelP}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
            
        );

    }


}

export default NewReleasePlayComponent;
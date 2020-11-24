import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/musicmain';

const renderItem = ({ item }) => {
    return(
        <View style={styles.rowPlay}>
            <View style={styles.album}>
                <Image
                    style={styles.albumImage}
                    source= {{uri: `http://direct.rhapsody.com/imageserver/v2/albums/${item.albumId}/images/300x300.jpg` }}
                />
                <Text style={styles.albumText}>{item.albumName}</Text>
                <Text style={styles.albumText}>{item.artistName}</Text>
            </View>
        </View>
    );

}

class RecentPlayComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          recentP: []
        };
    }

    componentDidMount() {
        fetch("https://api.napster.com/v2.2/tracks/top?apikey=ODQ1YjlmYzgtNTQ2OS00N2VhLTk1OGUtMTg3N2NmNjc1YTI5")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                recentP: result.tracks
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <View>
                    <Text style={styles.playName}>Recently Played</Text>
                    <SafeAreaView style={{flex:1}}>
                        <FlatList
                            data={this.state.recentP}
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

}
export default RecentPlayComponent;
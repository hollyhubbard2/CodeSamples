import React, {Component} from 'react';
import { View, FlatList, SafeAreaView} from 'react-native';
import styles from '../constants/instaStyles';

const renderBaseGrid = ({ item }) => {
    return(
        <View style={styles.rowGrid}>
            <View style={styles.gridCard}>
                <Image
                    style={styles.gridImage}
                    source= {item.postPhoto}
                />
            </View>
        </View>
    );

}

class GridComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gridFeed: this.props.posts
        };
    }
    render(){

        return (
            <View>
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.gridFeed}
                        renderItem={renderBaseGrid}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
          
        );

    }
  
};


export default GridComponent;
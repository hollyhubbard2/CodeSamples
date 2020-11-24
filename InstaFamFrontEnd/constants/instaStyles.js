import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#d500f9',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    headerItem: {
        flexDirection: "row",
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: '50px',
    },
    headerLogo: {
        width: '15vw',
        height: '5vw',
        resizeMode: "contain",
    },
    
});
export default styles;
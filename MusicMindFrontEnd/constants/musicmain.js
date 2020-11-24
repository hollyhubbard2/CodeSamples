import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
    },
    tabViewContainer:{
        flex: 1,
        backgroundColor: '#000000',
        padding: 10,
        minHeight: '60vh',
    },
    rowPlay:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 15,

    },
    playName:{
        color: '#ff5bff',
        fontSize: '3vw',
        fontWeight: '300',
    },
    album:{
        alignItems: 'center',
        
    },
    albumImage:{
        width: '20vw',
        height: '20vw',
        marginBottom: 10,
    },
    albumText:{
        color: '#ff5bff',
        fontSize: '1.5vw',
        fontWeight: '300',
        maxWidth: '20vw',
    },
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
    baseContainer:{
        flex: 1,
        backgroundColor: '#000000',
        padding: 10,
    },
    nowBaseCon: {
        flex: 1,
        
    },
    nowContainer: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        height: 'auto',
    },
    rowItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '30vw'
    },
    nowSongCon: {
        alignItems: 'center',
    },
    nowText1: {
        color: 'white',
    },
    nowText2: {
        color: 'white',
        fontSize: '1.8vw',
        paddingRight: 5,
    },
    nowText3: {
        color: 'white',
        fontSize: '1vw',
    },
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#484848',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    tabNavItem: {
        flexDirection: "row",
        alignItems: 'center',
    },
    tabText1: {
        color: 'white',
        fontSize: '3vw',
        fontWeight: '300',
    },
    tabText2: {
        color: 'white',
        fontSize: '1.5vw',
        fontWeight: '300',
        paddingLeft: 5,
    },


});
export default styles;
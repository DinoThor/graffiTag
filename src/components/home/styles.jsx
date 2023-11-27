import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const heightSlider = height * 0.4;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapStype: {
        width: '100%',
        height: '100%',
    },
    addButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: height * 0.02,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        position: 'absolute',
        top: height * 0.04,
        left: width * 0.05,
        right: width * 0.05
    },
    sliderStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(200, 230, 230, 1)',
        alignItems: 'center',
        borderRadius: 25,
        overflow: 'hidden'
    },
    sliderRange: {
        top: heightSlider,
        bottom: 0
    },
    graffitiStyle: {
        width: '100%',
        height: heightSlider * 0.6
    }
});
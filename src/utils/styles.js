import { Dimensions, StyleSheet } from "react-native"
const width = Dimensions.get("screen").width;
export const styles = StyleSheet.create({

    withFull: {
        width: width,
        
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },

    containerFullWitdth: {
        flex: 1,
        width: width,
    },

    box:{
        maxWidth: 300,
        width: "100%",
        borderRadius: 5,
        padding: 20,
        backgrpundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

    },

    imgRedonda: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
    },

});

export default styles;
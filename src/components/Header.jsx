import { Text, View, StyleSheet } from "react-native";
// import * as Battery from "expo-battery";
const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingBottom: 20,
        paddingHorizontal: 5,
        backgroundColor: 'green',
    },
    headerTextStyle: {
        marginTop: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default function Header({title}) {
   
    return(
        
        <View style={styles.header}>
            <Text style={styles.headerTextStyle}>
            {title}
            </Text>
           
      
        </View>
        
    )
}
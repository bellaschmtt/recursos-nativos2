
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },

    content: {
        flex: 1,
        gap: 20,
        padding: 20,
        alignSelf: "center",
        fontSize: 30,
    },

    contentTextStyle: {
        padding: 5,
        textAlignVertical: "center",
        minHeight: 50,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#ff4000",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },

});
export default function MyLocalAuthentication({ navigation}) {
    const autenticar = async () => {
        try{
            const resultado = await LocalAuthentication.hasHardwareAsync();
            console.log(resultado);
            if (!resultado) {
                alert("não rolou");
                return

            } 
            const {success, error} = await LocalAuthentication.authenticateAsync();
            console.log( error)
            if (success) {

                alert("deu certo");
            } else {
                alert("não deu certo");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return <View styles={styles.container}>
       
        <View style={styles.content}>
            <TouchableOpacity
            style={styles.button}
            onPress={autenticar}


            >
                <Text style={styles.buttonText}>Autenticar</Text>
            </TouchableOpacity>
        </View>
    </View>
}
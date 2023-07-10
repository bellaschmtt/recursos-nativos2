
import { StyleSheet, Text, View,  Button } from 'react-native';
import * as Device from 'expo-device';
import  Header  from '../components/Header';
// import {Footer} from '../components/Footer';
const styles = StyleSheet.create({
    // title: {
    //     backgroundColor: "purple",
    //     fontSize: 25,
    //     padding: 10,
    // },

    estilo: {
        fontSize: 15,
        backgroundColor: "yellow",
        padding: 10,
        top: 10,
        bottom: 10,
        margin: 10,
    },


    botao: {
        
        padding: 10,
        margin: 10,
        top: 10,
    },
    container: {
        flex: 1,
        gap: 10,
    },
});
export default function DeviceInfo() {
    return(
        <View style={styles.container}>
            <View style={{ backgroundColor: "green" }}> 
                <Header title="Orientação"/>
            </View>
            <Text style={styles.title}>Informações do dispositivo</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.modelName}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.modelId}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.osName}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.osVersion}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.designName}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.deviceName}</Text>
            <Text style={styles.estilo}>O seu dispositivo é:{Device.deviceYearClass}</Text>
            <Button style={styles.botao} title="Saida" />
        </View>
    )
}
import { Button, StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device';

const styles = StyleSheet.create({

    title: {
        fontSize: 27,
        backgroundColor: '#F24405',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        padding: 10,
    },
    estilo: {
       
        left: 20,
        position: 'relative',
        width: 300,
        fontSize: 20,
        backgroundColor: '#348888',
        color: 'white',
        padding: 10,
        marginBottom: 10,
    },
    
})

export default function DeviceInfo(){
    return(
        <View>
            <Text style={styles.title}> Informações do Aparelho</Text>
            <Text style={styles.estilo}>Nome do Aparelho: {Device.modelName}</Text>
            <Text style={styles.estilo}>Nome do Fabricante: {Device.manufacturer}</Text>
            <Text style={styles.estilo}>Nome do Sistema Operacional: {Device.osName}</Text>
            <Text style={styles.estilo}>Versão do Sistema Operacional: {Device.osVersion}</Text>
            <Text style={styles.estilo}>Plataforma: {Device.platform}</Text>
            <Text style={styles.estilo}>Idioma: {Device.osLanguage}</Text>
            <Text style={styles.estilo}>Idioma do Sistema: {Device.systemLanguage}</Text>
            <Text style={styles.estilo}>Idioma do Usuário: {Device.userLanguage}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
    
        </View>
        
        
        
    )
}


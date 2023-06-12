
import { StyleSheet, View,  Button, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Battery from "expo-battery";
import { useState } from 'react';
import { useEffect } from 'react';


const styles = StyleSheet.create({
    title: {
        backgroundColor: "purple",
        fontSize: 25,
        padding: 10,
    },

    estilo: {
        fontSize: 15,
        backgroundColor: "yellow",
        padding: 10,
        top: 10,
        bottom: 10,
        margin: 10,
    },


    botao: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        top: 10,
    },
    
});

export default function Notify() {
    const [expoToken, setExpoToken] = useState('');
    const [nivelBateria, setNivelBateria] = useState();


    async function NotifyExpo(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Notificação",
                subtitle: "Notificação",
                body: "Notificação",
            },
            trigger: { seconds: 3 }
        })
        setExpoToken(token)
    }
    async function NotifyBaterry(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Notificação",
                subtitle: "Notificação",
                body: "Notificação",
            },
            trigger: { seconds: 3 }
        })
        setExpoToken(token)
    }
    
    const ultimaNotificacao = Notifications.useLastNotificationResponse();
    async function exibirAlert(){
        alert('Opa, ve ai as mensagen')
    }
    useEffect(() => {
        exibirAlert();
        

    }), [ultimaNotificacao];

   
    return(
        <View>
            <Text>Expo Tokem: {expoToken}</Text>
           
            <Button 
                title="Enviar notificação"
                onPress={async () => NotifyExpo ()}
            />
            <Button 
                title="Enviar notificação da bateria"
                onPress={async () => NotifyBaterry() }
            />
            <Button title="Ler ultima notificação" />
            <Button title="esta aqui" />
        </View>
    )
}
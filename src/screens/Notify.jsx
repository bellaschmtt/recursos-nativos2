
import { StyleSheet, View,  Button, Text } from 'react-native';
import * as Notification from 'expo-notifications';
import { useState } from 'react';

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
    async function NotifyExpo(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Notificação",
                subtitle: "Notificação",
                body: "Notificação",
            },
            trigger: { seconds: 3 }
        })
        setExpoToken(token)
    }
    return(
        <View>
            <Text>Expo Tokem: {expoToken}</Text>
           
            <Button 
                title="Enviar notificação"
                onPress={async () => NotifyExpo ()}
            />
            <Button title="Ler ultima notificação" />
            <Button title="esta aqui" />
        </View>
    )
}
import {View, StyleSheet, Text, Button} from 'react-native';
import Header from '../components/Header';


export const styles = StyleSheet.create({
    container: {
        // backgroundColor: "purple",
    //   flex: 1 ,
      justifyContent: "center",
    //   alignItems: "center",
      padding: 10,
      top: 10,
     
    
    },
    content: {
        fontSize: 20,
      
    } 
   
});


export default function Home ({navigation}) {

    return (
        <View style={styles.container}>

            <View style={{ backgroundColor: "green" }}> 
                <Header title="Orientação"/>
            </View>

            <Text style={styles.content}>
                Bem-vindo
            </Text>
            <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('DeviceInfo')}
                title="Ir para DeviceInfo"
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                // mode="contained"
                onPress={() => navigation.navigate('BatteryInfo')}
                title="Ir para Bateria e afins"
                
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                
                mode="contained"
                onPress={() => navigation.navigate('Notify')}
                title="Ir para Notificações"
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('MyScreenOrientation')}
                title="Ir para MyScreenOrientation"
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('ContactsInfo')}
                title="Ir para Contatos"
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('Sensors')}
                title="Ir para o Sensor"
            />
             <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('ScreensInfo')}
                title="Ir para o captura de tela"
            />
            <View style={{ marginTop: 10 }} />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('LocalAuthentication')}
                title="bio"
            />
           

        </View>
    )
}
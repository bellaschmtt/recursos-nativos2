import {View, StyleSheet, Text, Button} from 'react-native';
// import Header from '../components/Header';


export const styles = StyleSheet.create({
    container: {
        // backgroundColor: "purple",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      top: 10,
     
    
    },
    //fazer um estilo para dar distância aos demais    
    estilo: {
        // fontSize: 15,
        // backgroundColor: "yellow",
        padding: 10,
        top: 10,
        // bottom: 10,
        margin: 10,
    },
});


export default function Home ({navigation}) {

    return (
        <View style={styles.container}>
            {/* <Header title="Contatos"/> */}
            <Text style={styles.content}>
                Bem-vindo
            </Text>
            <Button 
               
                mode="contained"
                onPress={() => navigation.navigate('DeviceInfo')}
                title="Ir para DeviceInfo"
            />
            <Button 
                // mode="contained"
                onPress={() => navigation.navigate('BatteryInfo')}
                title="Ir para Bateria e afins"
                
            />
            <Button 
                
                mode="contained"
                onPress={() => navigation.navigate('Notify')}
                title="Ir para Notificações"
            />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('MyScreenOrientation')}
                title="Ir para MyScreenOrientation"
            />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('ContactsInfo')}
                title="Ir para Contatos"
            />

        </View>
    )
}
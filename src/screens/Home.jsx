import {View, StyleSheet, Text, Button} from 'react-native';
// import Header from '../components/Header';
import styles from '../utils/styles';


export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                Bem-vindo
            </Text>
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('DeviceInfo')}
                title="Ir para DeviceInfo"
            />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('BatteryInfo')}
                title="Ir para BatteryInfo"
            />
            <Button 
                mode="contained"
                onPress={() => navigation.navigate('Notify')}
                title="Ir para Notify"
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
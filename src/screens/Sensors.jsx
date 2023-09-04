import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import {Gyroscope, Magnetometer, Accelerometer, Barometer} from "expo-sensors";
import { useEffect, useState } from "react";
import { Title } from "react-native-paper";



const styles =  StyleSheet.create({
// fazer o style aqui depois
container: {
  flex: 1,
  justifyContent: "center",
  top: -90,
 
},
content: {
    fontSize: 20,
    padding: 129,
},



});
export default function Sensors({navigation}) {
    const [giroscopio, setGiroscopio] = useState({});
    const [magnetometro, setMagneto] = useState({});
    const [acelerometro, setAcelerometro] = useState({});
    const [barometro, setBarometro] = useState({});

    useEffect(() => {
        Gyroscope.addListener(giroscopioListener);
        Magnetometer.addListener(magnetometroListener);
        Accelerometer.addListener(acelerometroListener);
        Barometer.addListener(barometroListener);
        return () => {
            Gyroscope.removeAllListeners();
            Magnetometer.removeAllListeners();
            Accelerometer.removeAllListeners();
            Barometer.removeAllListeners();
        }
    }, [])

    const giroscopioListener = (data) => {
        setGiroscopio(data);
    }
    const magnetometroListener = (data) => {
        setMagneto(data);
    }
    const acelerometroListener = (data) => {
        setAcelerometro(data);
    }
    const barometroListener = (data) => {
        setBarometro(data);
    }
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "green" }}> 
                <Header title="Orientação"/>
            </View>
           
            <View style={styles.content}>
                <Text style={styles.sensor}>
                    <Title>Magnetômetro</Title>
                    {'\n'}
                    X: {magnetometro.x}
                    {'\n'}
                    Y: {magnetometro.y}
                    {'\n'}
                    Z: {magnetometro.z}
                    {'\n'}
                    {'\n'}
                    <Title>Giroscópio</Title>
                
                    {'\n'}
                    X: {giroscopio.x}
                    {'\n'}
                    Y: {giroscopio.y}
                    {'\n'}
                    Z: {giroscopio.z}
                    {'\n'}
                    {'\n'}
                    
                    <Title>Acelerômetro</Title>
                    {/* <Text>Mede a vibração e aceleração do movimento</Text> */}
                    {'\n'}
                    X: {acelerometro.x}
                    {'\n'}
                    Y: {acelerometro.y}
                    {'\n'}
                    Z: {acelerometro.z}
                    {'\n'}
                    {'\n'}
                    <Title>Barômetro</Title>
                    {/* <Text>Mede a pressão atmosférica</Text> */}
                    {'\n'}
                    Pressão: {barometro.pressure}
                    {'\n'}  
                    


                    
                </Text>
            </View>
           
        </View>
    );
}
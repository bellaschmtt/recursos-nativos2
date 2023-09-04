// import { View, StyleSheet } from "react-native";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Button } from "react-native-paper";
// import * as ScreenCapture from 'expo-screen-capture';


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center"
//     }
// });

// export default function ScreensInfo({ navigation }) {
//     const active =  async () => {
//         await ScreenCapture.preventScreenCaptureAsync();
//     }
//     const desactive =  async () => {
//         await ScreenCapture.allowScreenCaptureAsync();
//     }

//     return (
//         <View 
//             style={StyleSheet.container}
//             accessibilityLabel='Expo screen'
//             >
//             <Header title="Captura de tela" />
//             <View style={styles.container}>
//                 <Button title="Ativar" onPress={active}/>
//                 <Button title="Desativar" onPress={desactive}/>
//             </View>
//             <Footer
//                 onPress={() => navigation.goBack()}
//             />
//         </View>
//     );
// }


import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

export default function ScreenCaptureExample() {
  useEffect(() => {
    if (hasPermissions()) {
      const subscription = ScreenCapture.addScreenshotListener(() => {
        alert('Bem-vindo😊');
      });
      return () => subscription.remove();
    }
  }, []);

  const hasPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === 'granted';
  };

  const deactivate = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
  };

  const activate  = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
  };

  return (
    <View style={styles.container}>
      <Button title="Activate" onPress={activate} />
      <View style={{ marginTop: 10 }} />
      <Button title="Deactivate" onPress={deactivate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

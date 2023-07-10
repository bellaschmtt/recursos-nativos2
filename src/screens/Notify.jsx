import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from "expo-battery";

// import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";

import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    gap: 10,
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");

  const [nivelBateria, setNivelBateria] = useState();

  const [statusBateria, setStatusBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  async function status() {
    const status = await Battery.getBatteryStateAsync();

    setStatusBateria(status);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();

    setNivelBateria(nivel * 100);
  }
  async function mudartela() {
    if (nivelBateria < 20) {
      navigation.navigate("BatteryInfo");
    }
  }

  useEffect(() => {
    bateria();
    status();
    mudartela();
  }, []);

  async function notificarBateria() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Nível da bateria",

        subtitle: "aaaaaaa",

        body: nivelBateria + "%",
      },

      trigger: { seconds: 3 },
    });

    setExpoToken(token);
  }

  async function notiAlertaBateria() {
    alert("Nível da bateria: " + nivelBateria + "%");
  }

  async function notiMensagem() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Mensagem",

        subtitle: "aaaaaa",

        body: "Help",
      },

      trigger: { seconds: 3 },
    });
  }

  async function notificarAparelho() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Aparelho",

        subtitle: "aaaaa",

        body: "O seu aparelho " + Device.modelName + " é incrível",
      },

      trigger: { seconds: 3 },
    });

    setExpoToken(token);
    mudartela();
  }

  function navigateToAnotherPage() {
    navigation.navigate("Home");
  }
  // completar
  // async function OutraPag() {
  //   alert("teste");
  // }
  return (
    <View style={styles.container}>
      <Header title="Notificações" />

      <View>
        <Text>Notify</Text>
      </View>

      <View>
        <Text>Token: {expoToken}</Text>
        <Button title="Enviar Notificação" onPress={notiMensagem} />
        <Button title="Enviar Alerta da bateria" onPress={notiAlertaBateria} />
        <Button title="Enviar Alerta do aparelho" onPress={notificarAparelho} />

        <Button
          title="Enviar Notificação da Bateria"
          onPress={notificarBateria}
        />

        <Button
          title="Enviar para outra página"
          onPress={navigateToAnotherPage}
        />
      </View>
    </View>
  );
}

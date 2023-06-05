import { Text, View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as ScreenOrientation from "expo-screen-orientation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },

  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },

  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

async function padrao() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
}

export default function MyScreenOrientations({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Orientação de Tela" />

      <View style={styles.content}>
        <Button title="Default" onPress={padrao} />
      </View>

      <Footer onPress={() => navigation.goBack()} />
    </View>
  );
}

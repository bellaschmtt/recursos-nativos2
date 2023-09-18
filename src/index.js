import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DeviceInfo from "./screens/DeviceInfo";
import BaterryInfo from "./screens/BatteryInfo";
import Notify from "./screens/Notify";
import { NavigationContainer } from "@react-navigation/native";
import MyScreenOrientation from "./screens/MyScreenOrientation";
import ContactsInfo from "./screens/ContactsInfo";
import Sensors from "./screens/Sensors";
// import ScreensInfo from "./screens/ScreensInfo";
import ScreenCaptureExample from "./screens/ScreensInfo";
import MyLocalAuthentication from "./screens/LocalAuthentication";
import CameraInfo from "./screens/CameraInfo";



const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{ title: "Device Info" }}
        />
        <Stack.Screen
          name="BatteryInfo"
          component={BaterryInfo}
          options={{ title: "Baterry Info" }}
        />

        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{ title: "Notify" }}
        />
        <Stack.Screen
          name="MyScreenOrientation"
          component={MyScreenOrientation}
          options={{ title: "MyScreenOrientations" }}
        />
        <Stack.Screen
          name="ContactsInfo"
          component={ContactsInfo}
          options={{ title: "ContactsInfo" }}
        />
        <Stack.Screen
          name="Sensors"
          component={Sensors}
          options={{ title: "Sensor" }}
        />
        <Stack.Screen
          name="ScreensInfo"
          component={ScreenCaptureExample}
          options={{ title: "ScreensInfo" }}
        />
        <Stack.Screen
          name="LocalAuthentication"
          component={MyLocalAuthentication}
          options={{ title: "LocalAuthentication" }}
        />
         <Stack.Screen
          name="CameraInfo"
          component={CameraInfo}
          options={{ title: "CameraInfo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

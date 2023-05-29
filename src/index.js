import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DeviceInfo from "./screens/DeviceInfo";
import BaterryInfo from "./screens/BatteryInfo";
import { NavigationContainer } from "@react-navigation/native";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

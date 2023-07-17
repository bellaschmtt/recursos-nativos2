import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DeviceInfo from "./screens/DeviceInfo";
import BaterryInfo from "./screens/BatteryInfo";
import Notify from "./screens/Notify";
import { NavigationContainer } from "@react-navigation/native";
import MyScreenOrientation from "./screens/MyScreenOrientation";
import ContactsInfo from "./screens/ContactsInfo";
import TaskList from "./screens/TaskList";

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
          name="TaskList"
          component={TaskList}
          options={{ title: "TaskList" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

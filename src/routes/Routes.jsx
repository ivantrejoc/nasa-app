import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/home";
import { Detail } from "../views/detail";

const Stack = createNativeStackNavigator();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)"
  },
  headerTitleStyle: {
    color: "#FFFFFF"
  }
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions} />
        <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;

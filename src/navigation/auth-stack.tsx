import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home-screen";

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}
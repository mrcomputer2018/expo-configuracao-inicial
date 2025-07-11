import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryScreen from "../screens/entry-screen";
import SignUpScreen from "../screens/sign-up-screen";
import SignInScreen from "../screens/sign-in-screen";

export default function PublicStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Entry">
            <Stack.Screen
                name="Entry"
                component={EntryScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

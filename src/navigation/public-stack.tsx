import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryScreen from "../screens/entry-screen";

export default function PublicStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Entry"
                component={EntryScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
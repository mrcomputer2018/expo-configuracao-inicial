import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/root-stack";
import { AuthProvider } from "./src/contexts/auth-context";
import Toast from "react-native-toast-message";
import { CartProvider } from "./src/contexts/cart-context";

export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <NavigationContainer>
                    <RootStack />
                    <Toast />
                </NavigationContainer>
            </CartProvider>
        </AuthProvider>
    );
}

import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/root-stack";

export default function App() {
    return (
        <NavigationContainer>
           <RootStack/>
        </NavigationContainer>
    );
}


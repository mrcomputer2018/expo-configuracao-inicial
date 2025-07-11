import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global-styles";
import LogoImage from "../components/logo-image";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/custom-button";

const image = require("../../assets/background.jpeg");

export default function EntryScreen({navigation}: any) {
    function handleNavigateToLogin() {
        navigation.navigate("SignIn");
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar style="light" />
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={globalStyles.imageBackground}
            >
                <LogoImage />
                <Text style={globalStyles.text}>Bem-vindo ao nosso app!</Text>
                <Text style={globalStyles.Title}>NextBite Food</Text>
                <Text style={globalStyles.description}>
                    O futuro da sua próxima refeição.
                </Text>

                <CustomButton title="Entrar" action={handleNavigateToLogin} width={280}/>

            </ImageBackground>
        </SafeAreaView>
    );
}

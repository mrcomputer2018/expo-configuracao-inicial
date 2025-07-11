import { Image, View } from "react-native";
import { globalStyles } from "../styles/global-styles";

const image = require("../../assets/logotipo.png");

export default function LogoImage() {
    return (
        <View>
            < Image source={image} style={ globalStyles.logoImage }/>
        </View>
    );
}
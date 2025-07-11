import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global-styles";

interface CustomButtonProps {
    title: string;
    action: () => void;
    width?: number;
}

export default function CustomButton({
    title,
    action,
    width,
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            style={[globalStyles.button, { width: width }]}
            onPress={action}
        >
            <LinearGradient
                colors={["#00c66f", "#0077e4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={globalStyles.buttonGradiente}
            >
                <Text style={ globalStyles.buttonText}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

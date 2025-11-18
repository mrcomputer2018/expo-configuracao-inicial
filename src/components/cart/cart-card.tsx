import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons as Material } from "@expo/vector-icons"
import { styles } from "./styles";

export default function CartCard({ ...item }) {
    return (
        <View style={styles.container}>
            <Image source={item.image} alt={item.name} style={styles.image} />
            <View>
                <Text>{item.name}</Text>
                <Text>R$ {item.price}</Text>
                <View>
                    <TouchableOpacity style={styles.buttonQuantity}>
                        <Material name="remove" color="#66BE70" size={24}/>
                        <Text>{item.quantity}</Text>
                         <Material name="add" color="#66BE70" size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

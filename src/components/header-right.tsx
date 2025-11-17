import { View, Text, TouchableOpacity } from "react-native";
import Material from "@expo/vector-icons/MaterialCommunityIcons";
import { useCart } from "../hook/use-cart";
import { useNavigation } from "@react-navigation/native";

export default function HeaderRight() {
    const { cart } = useCart();

    const navigation = useNavigation<any>()

    function handleNavigateToCart() {
        navigation.navigate("Carrinho")
    }

    return (
        <View style={{ position: "relative" }}>
            <TouchableOpacity
                style={{
                    marginRight: 16,
                    backgroundColor: "#66BE70",
                    borderRadius: 50,
                    padding: 8,
                }}
                onPress={handleNavigateToCart}
            >
                <Material name="shopping-outline" color="#fff" size={24} />
            </TouchableOpacity>
            <View
                style={{
                    backgroundColor: "red",
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 10,
                }}
            >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>{cart.length}</Text>
            </View>
        </View>
    );
}

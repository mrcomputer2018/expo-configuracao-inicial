import { FlatList } from "react-native";
import { styles } from "./styles";
import CartCard from "./cart-card";
import { useCart } from "../../hook/use-cart";

export default function CartList() {
    const { cart } = useCart()
    return (
        <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartCard {...item} />}
            showsVerticalScrollIndicator={false}
        />
    );
}

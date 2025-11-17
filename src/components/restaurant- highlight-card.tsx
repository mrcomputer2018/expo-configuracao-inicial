import { useState } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { restaurantHighlightCardStyles as styles } from "../styles/restaurant-highlight-card-styles";
import Material from "@expo/vector-icons/MaterialCommunityIcons";


export function RestaurantHighlightCard({
    ...item
}) {
    const [favorited, setFavorited] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={item.image ? { uri: item.image } : undefined}
                    style={styles.image}
                />
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.address}</Text>
                </View>
            </View>
            <Pressable onPress={() => setFavorited(!favorited)}>
                <Material
                    name={
                        favorited
                            ? ("favorite" as any)
                            : ("favorite-border" as any)
                    }
                    size={16}
                    color={favorited ? "red" : "gray"}
                />
            </Pressable>
        </View>
    );
}

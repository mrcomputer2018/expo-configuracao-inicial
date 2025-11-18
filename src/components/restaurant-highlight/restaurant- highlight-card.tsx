import { useState } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import Material from "@expo/vector-icons/MaterialIcons";


export function RestaurantHighlightCard({
    ...item
}) {
    const [favorited, setFavorited] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                </View>
            </View>
            <Pressable onPress={() => setFavorited(!favorited)}>
                <Material
                    name={
                        favorited
                            ? ("favorite" as any)
                            : ("favorite-border" as any)
                    }
                    size={22}
                    color={favorited ? "red" : "gray"}
                />
            </Pressable>
        </View>
    );
}

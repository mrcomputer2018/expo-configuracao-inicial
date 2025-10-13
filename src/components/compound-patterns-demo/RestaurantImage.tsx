import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { useRestaurantCard } from "./RestaurantCard";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

interface RestaurantImageProps {
    source?: ImageSourcePropType;
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

export function RestaurantImage({
    source,
    resizeMode = "cover",
}: RestaurantImageProps) {
    const { image } = useRestaurantCard();

    const imageSource = source || image;

    if (!imageSource) {
        return null;
    }

    return (
        <Image
            source={imageSource}
            style={styles.image}
            resizeMode={resizeMode}
        />
    );
}

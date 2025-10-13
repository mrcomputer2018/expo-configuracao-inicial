import React from "react";
import { View, Text, TextStyle } from "react-native";
import { useRestaurantCard } from "./RestaurantCard";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

interface RestaurantHeaderProps {
    name?: string;
    cuisine?: string;
    nameStyle?: TextStyle;
    cuisineStyle?: TextStyle;
}

export function RestaurantHeader({
    name: propName,
    cuisine: propCuisine,
    nameStyle,
    cuisineStyle,
}: RestaurantHeaderProps) {
    const { name: contextName, cuisine: contextCuisine } = useRestaurantCard();

    const displayName = propName || contextName;
    const displayCuisine = propCuisine || contextCuisine;

    return (
        <View>
            {displayName && (
                <Text style={[styles.restaurantName, nameStyle]}>
                    {displayName}
                </Text>
            )}
            {displayCuisine && (
                <Text style={[styles.cuisineType, cuisineStyle]}>
                    {displayCuisine}
                </Text>
            )}
        </View>
    );
}

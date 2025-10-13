import React from "react";
import { Text, TextStyle } from "react-native";
import { useRestaurantCard } from "./RestaurantCard";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

interface RestaurantSpecialtiesProps {
    specialties?: string;
    style?: TextStyle;
}

export function RestaurantSpecialties({
    specialties: propSpecialties,
    style,
}: RestaurantSpecialtiesProps) {
    const { specialties: contextSpecialties } = useRestaurantCard();

    const displaySpecialties = propSpecialties || contextSpecialties;

    if (!displaySpecialties) {
        return null;
    }

    return (
        <Text style={[styles.specialties, style]}>{displaySpecialties}</Text>
    );
}

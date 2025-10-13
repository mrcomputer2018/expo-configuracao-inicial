import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

interface RestaurantContentProps {
    children: ReactNode;
    style?: ViewStyle;
}

export function RestaurantContent({ children, style }: RestaurantContentProps) {
    return <View style={[styles.infoSection, style]}>{children}</View>;
}

import React from "react";
import { View, Text, TextStyle, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRestaurantCard } from "./RestaurantCard";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

interface RestaurantInfoProps {
    rating?: string;
    deliveryInfo?: string;
    time?: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    showIcons?: boolean;
}

export function RestaurantInfo({
    rating: propRating,
    deliveryInfo: propDeliveryInfo,
    time: propTime,
    containerStyle,
    textStyle,
    showIcons = true,
}: RestaurantInfoProps) {
    const {
        rating: contextRating,
        deliveryInfo: contextDeliveryInfo,
        time: contextTime,
    } = useRestaurantCard();

    const rating = propRating || contextRating;
    const deliveryInfo = propDeliveryInfo || contextDeliveryInfo;
    const time = propTime || contextTime;

    return (
        <View style={[styles.deliveryInfoSection, containerStyle]}>
            {rating && (
                <View style={styles.container}>
                    {showIcons && (
                        <Feather name="star" size={12} color="#66BE70" />
                    )}
                    <Text style={[styles.textInfo, textStyle]}>{rating}</Text>
                </View>
            )}

            {deliveryInfo && (
                <View>
                    <Text style={[styles.textInfo, textStyle]}>
                        {deliveryInfo}
                    </Text>
                </View>
            )}

            {time && (
                <View style={styles.container}>
                    {showIcons && (
                        <Feather name="clock" size={12} color="#66BE70" />
                    )}
                    <Text style={[styles.textInfo, textStyle]}>{time}</Text>
                </View>
            )}
        </View>
    );
}

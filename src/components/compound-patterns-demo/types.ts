import React from "react";
import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

// Tipos base do restaurante
export interface RestaurantData {
    id?: string;
    name?: string;
    cuisine?: string;
    specialties?: string;
    rating?: string;
    deliveryInfo?: string;
    time?: string;
    image?: ImageSourcePropType;
}

// Props do componente principal
export interface RestaurantCardProps extends RestaurantData {
    children: React.ReactNode;
    style?: ViewStyle;
}

// Props dos sub-componentes
export interface RestaurantImageProps {
    source?: ImageSourcePropType;
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

export interface RestaurantHeaderProps {
    name?: string;
    cuisine?: string;
    nameStyle?: TextStyle;
    cuisineStyle?: TextStyle;
}

export interface RestaurantSpecialtiesProps {
    specialties?: string;
    style?: TextStyle;
}

export interface RestaurantInfoProps {
    rating?: string;
    deliveryInfo?: string;
    time?: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    showIcons?: boolean;
}

export interface RestaurantContentProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

// Tipo do contexto
export interface RestaurantCardContextData extends RestaurantData {}

// Tipo do compound component
export interface CompoundRestaurantCard {
    (props: RestaurantCardProps): React.ReactElement;
    Image: React.ComponentType<RestaurantImageProps>;
    Header: React.ComponentType<RestaurantHeaderProps>;
    Specialties: React.ComponentType<RestaurantSpecialtiesProps>;
    Info: React.ComponentType<RestaurantInfoProps>;
    Content: React.ComponentType<RestaurantContentProps>;
}

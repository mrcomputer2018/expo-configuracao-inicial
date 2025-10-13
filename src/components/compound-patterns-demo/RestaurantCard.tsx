import React, { createContext, useContext, ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { restaurantCardStyles as styles } from "./restaurant-card.styles"

// Context para compartilhar dados entre os sub-componentes
interface RestaurantCardContextData {
    id?: string;
    name?: string;
    cuisine?: string;
    specialties?: string;
    rating?: string;
    deliveryInfo?: string;
    time?: string;
    image?: string;
}

const RestaurantCardContext = createContext<RestaurantCardContextData>({});

// Hook para acessar o contexto
export const useRestaurantCard = () => {
    const context = useContext(RestaurantCardContext);
    if (!context) {
        throw new Error(
            "useRestaurantCard deve ser usado dentro de um RestaurantCard"
        );
    }
    return context;
};

// Componente Principal
interface RestaurantCardProps extends RestaurantCardContextData {
    children: ReactNode;
    style?: ViewStyle;
}

function RestaurantCardRoot({ children, style, ...data }: RestaurantCardProps) {
    return (
        <RestaurantCardContext.Provider value={data}>
            <View style={[styles.restaurantCard, style]}>{children}</View>
        </RestaurantCardContext.Provider>
    );
}

export default RestaurantCardRoot;

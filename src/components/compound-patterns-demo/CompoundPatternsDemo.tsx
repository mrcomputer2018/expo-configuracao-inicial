import React from "react";
import { View, ScrollView } from "react-native";
import RestaurantCard from "./index";

// Mock data para demonstração
const mockData = {
    id: "1",
    name: "Bella Italia",
    cuisine: "Italiana",
    specialties: "Pizza - Massas - Risotos",
    rating: "4.8",
    deliveryInfo: "Grátis",
    time: "25-35 min",
    image: require("../../../assets/bella-italia.jpeg"),
};

export function CompoundPatternsDemo() {
    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            {/* Exemplo 1: Uso Básico - Composição Padrão */}
            <RestaurantCard {...mockData}>
                <RestaurantCard.Image />
                <RestaurantCard.Content>
                    <RestaurantCard.Header />
                    <RestaurantCard.Specialties />
                    <RestaurantCard.Info />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Exemplo 2: Composição Customizada - Sem imagem */}
            <RestaurantCard
                name="Tokyo Sushi"
                cuisine="Japonesa"
                rating="4.9"
                time="15-25 min"
            >
                <RestaurantCard.Content>
                    <RestaurantCard.Header />
                    <RestaurantCard.Info showIcons={false} />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Exemplo 3: Layout Diferente - Informações no topo */}
            <RestaurantCard
                name="Rose Garden"
                cuisine="Árabe"
                deliveryInfo="R$ 3,99"
                time="20-30 min"
                image={require("../../../assets/rose-garden.png")}
            >
                <RestaurantCard.Content>
                    <RestaurantCard.Info />
                    <RestaurantCard.Header
                        nameStyle={{ fontSize: 18, color: "#E91E63" }}
                    />
                </RestaurantCard.Content>
                <RestaurantCard.Image />
            </RestaurantCard>

            {/* Exemplo 4: Apenas Informações Específicas */}
            <RestaurantCard name="Fast Burger" rating="4.2">
                <RestaurantCard.Content>
                    <RestaurantCard.Header />
                    <RestaurantCard.Info
                        containerStyle={{
                            justifyContent: "flex-start",
                            gap: 20,
                        }}
                    />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Exemplo 5: Override de Props */}
            <RestaurantCard {...mockData}>
                <RestaurantCard.Image resizeMode="contain" />
                <RestaurantCard.Content>
                    <RestaurantCard.Header
                        name="Nome Customizado"
                        cuisine="Culinária Override"
                    />
                    <RestaurantCard.Specialties specialties="Especialidades Override" />
                    <RestaurantCard.Info
                        rating="5.0"
                        deliveryInfo="Express"
                        time="10 min"
                    />
                </RestaurantCard.Content>
            </RestaurantCard>
        </ScrollView>
    );
}

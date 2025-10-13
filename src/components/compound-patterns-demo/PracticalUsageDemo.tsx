import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import RestaurantCard from "./index";

/**
 * Exemplo Prático: Como usar o Compound Pattern em uma tela real
 * Demonstra diferentes casos de uso comuns em apps de delivery
 */

const restaurants = [
    {
        id: "1",
        name: "Bella Italia",
        cuisine: "Italiana",
        specialties: "Pizza - Massas - Risotos",
        rating: "4.8",
        deliveryInfo: "Grátis",
        time: "25-35 min",
        image: require("../../../assets/bella-italia.jpeg"),
    },
    {
        id: "2",
        name: "Tokyo Sushi",
        cuisine: "Japonesa",
        rating: "4.9",
        deliveryInfo: "R$ 2,99",
        time: "15-25 min",
        image: require("../../../assets/tokio-sushi.png"),
    },
];

export function PracticalUsageDemo() {
    return (
        <ScrollView style={styles.container}>
            {/* Seção: Cards Destacados */}
            <Text style={styles.sectionTitle}>⭐ Restaurantes em Destaque</Text>
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant}>
                    <RestaurantCard.Image />
                    <RestaurantCard.Content>
                        <RestaurantCard.Header />
                        <RestaurantCard.Specialties />
                        <RestaurantCard.Info />
                    </RestaurantCard.Content>
                </RestaurantCard>
            ))}

            {/* Seção: Lista Compacta */}
            <Text style={styles.sectionTitle}>📋 Lista Rápida</Text>
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={`compact-${restaurant.id}`}
                    {...restaurant}
                    style={styles.compactCard}
                >
                    <RestaurantCard.Content style={styles.compactContent}>
                        <View style={styles.compactRow}>
                            <RestaurantCard.Header
                                nameStyle={styles.compactName}
                                cuisineStyle={styles.compactCuisine}
                            />
                            <RestaurantCard.Info
                                containerStyle={styles.compactInfo}
                                textStyle={styles.compactText}
                                showIcons={false}
                            />
                        </View>
                    </RestaurantCard.Content>
                </RestaurantCard>
            ))}

            {/* Seção: Cards Promocionais */}
            <Text style={styles.sectionTitle}>🔥 Promoções Especiais</Text>
            <RestaurantCard
                name="Super Burger"
                cuisine="Hamburguer"
                rating="4.5"
                deliveryInfo="GRÁTIS hoje!"
                time="20 min"
                style={styles.promoCard}
            >
                <RestaurantCard.Content style={styles.promoContent}>
                    <RestaurantCard.Header
                        nameStyle={styles.promoName}
                        cuisineStyle={styles.promoCuisine}
                    />
                    <Text style={styles.promoText}>
                        🎉 50% OFF no primeiro pedido!
                    </Text>
                    <RestaurantCard.Info
                        containerStyle={styles.promoInfo}
                        textStyle={styles.promoInfoText}
                    />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Seção: Cards Minimalistas */}
            <Text style={styles.sectionTitle}>🎯 Acesso Rápido</Text>
            <View style={styles.quickAccessRow}>
                <RestaurantCard name="Pizza Express" style={styles.quickCard}>
                    <RestaurantCard.Content style={styles.quickContent}>
                        <RestaurantCard.Header nameStyle={styles.quickName} />
                    </RestaurantCard.Content>
                </RestaurantCard>

                <RestaurantCard name="Sushi Fast" style={styles.quickCard}>
                    <RestaurantCard.Content style={styles.quickContent}>
                        <RestaurantCard.Header nameStyle={styles.quickName} />
                    </RestaurantCard.Content>
                </RestaurantCard>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 24,
        marginBottom: 12,
        marginHorizontal: 16,
        color: "#2c3e50",
    },

    // Compact Cards
    compactCard: {
        width: "92%",
        alignSelf: "center",
        height: 70,
        marginVertical: 4,
    },
    compactContent: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    compactRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    compactName: {
        fontSize: 16,
        fontWeight: "600",
    },
    compactCuisine: {
        fontSize: 12,
        marginTop: 2,
    },
    compactInfo: {
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2,
    },
    compactText: {
        fontSize: 11,
    },

    // Promo Cards
    promoCard: {
        width: "92%",
        alignSelf: "center",
        backgroundColor: "#fff5f5",
        borderColor: "#ff6b6b",
        borderWidth: 2,
    },
    promoContent: {
        paddingVertical: 16,
    },
    promoName: {
        fontSize: 20,
        color: "#e63946",
        fontWeight: "bold",
    },
    promoCuisine: {
        color: "#e63946",
        opacity: 0.8,
    },
    promoText: {
        fontSize: 14,
        color: "#e63946",
        fontWeight: "600",
        marginVertical: 8,
    },
    promoInfo: {
        justifyContent: "flex-start",
        gap: 16,
    },
    promoInfoText: {
        color: "#e63946",
        fontWeight: "500",
    },

    // Quick Access Cards
    quickAccessRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    quickCard: {
        width: "45%",
        height: 60,
        backgroundColor: "#e9ecef",
    },
    quickContent: {
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    quickName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#495057",
        textAlign: "center",
    },
});

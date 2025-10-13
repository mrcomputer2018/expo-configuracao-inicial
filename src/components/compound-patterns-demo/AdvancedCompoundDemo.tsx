import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import RestaurantCard from "./index";

const sampleRestaurants = [
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
        specialties: "Sushi - Sashimi - Temaki",
        rating: "4.9",
        deliveryInfo: "R$ 2,99",
        time: "15-25 min",
        image: require("../../../assets/tokio-sushi.png"),
    },
];

export function AdvancedCompoundDemo() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Compound Patterns - Layouts Avançados
            </Text>

            {/* Layout 1: Padrão */}
            <Text style={styles.sectionTitle}>1. Layout Padrão</Text>
            <RestaurantCard {...sampleRestaurants[0]}>
                <RestaurantCard.Image />
                <RestaurantCard.Content>
                    <RestaurantCard.Header />
                    <RestaurantCard.Specialties />
                    <RestaurantCard.Info />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Layout 2: Compacto (sem imagem) */}
            <Text style={styles.sectionTitle}>2. Layout Compacto</Text>
            <RestaurantCard
                {...sampleRestaurants[1]}
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
                            showIcons={false}
                        />
                    </View>
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Layout 3: Invertido (Info no topo) */}
            <Text style={styles.sectionTitle}>3. Layout Invertido</Text>
            <RestaurantCard
                name="Rose Garden"
                cuisine="Árabe"
                rating="4.7"
                time="30 min"
            >
                <RestaurantCard.Content>
                    <RestaurantCard.Info />
                    <View style={styles.spacer} />
                    <RestaurantCard.Header nameStyle={styles.highlightName} />
                </RestaurantCard.Content>
                <RestaurantCard.Image
                    source={require("../../../assets/rose-garden.png")}
                />
            </RestaurantCard>

            {/* Layout 4: Minimalista */}
            <Text style={styles.sectionTitle}>4. Layout Minimalista</Text>
            <RestaurantCard
                name="Fast Burger"
                rating="4.2"
                style={styles.minimalCard}
            >
                <RestaurantCard.Content style={styles.minimalContent}>
                    <RestaurantCard.Header nameStyle={styles.minimalName} />
                </RestaurantCard.Content>
            </RestaurantCard>

            {/* Layout 5: Card Horizontal */}
            <Text style={styles.sectionTitle}>5. Layout Horizontal</Text>
            <RestaurantCard
                {...sampleRestaurants[0]}
                style={styles.horizontalCard}
            >
                <View style={styles.horizontalContainer}>
                    <RestaurantCard.Image source={sampleRestaurants[0].image} />
                    <RestaurantCard.Content style={styles.horizontalContent}>
                        <RestaurantCard.Header />
                        <RestaurantCard.Specialties />
                        <RestaurantCard.Info
                            containerStyle={styles.horizontalInfo}
                        />
                    </RestaurantCard.Content>
                </View>
            </RestaurantCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
        color: "#555",
    },

    // Compact Layout
    compactCard: {
        width: "100%",
        height: 80,
    },
    compactContent: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    compactRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    compactName: {
        fontSize: 16,
    },
    compactCuisine: {
        fontSize: 12,
    },
    compactInfo: {
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2,
    },

    // Inverted Layout
    spacer: {
        height: 10,
    },
    highlightName: {
        color: "#E91E63",
        fontSize: 22,
    },

    // Minimal Layout
    minimalCard: {
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    minimalContent: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    minimalName: {
        fontSize: 18,
        textAlign: "center",
    },

    // Horizontal Layout
    horizontalCard: {
        width: "100%",
        height: 120,
    },
    horizontalContainer: {
        flexDirection: "row",
        flex: 1,
    },
    horizontalContent: {
        flex: 1,
        paddingLeft: 16,
    },
    horizontalInfo: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
    },
});

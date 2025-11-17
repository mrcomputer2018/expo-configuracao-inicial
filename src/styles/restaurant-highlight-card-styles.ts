import { StyleSheet } from "react-native"

export const restaurantHighlightCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    infoContainer: {
        flexDirection: "column",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover"
    }
})
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: "cover"
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    address: {
         fontSize: 14,
    }
})
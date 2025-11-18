import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 10,
        gap: 10,
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: "cover",
        borderRadius: 6
    },
    buttonQuantity: {
        flexDirection: "row",
        gap: 10
    }
})
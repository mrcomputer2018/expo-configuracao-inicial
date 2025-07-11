import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 75,
    },
    text: {
        fontSize: 22,
        color: "#f5f5f5",
    },
    Title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: "#dcdcdc",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
    buttonGradiente: {
        height: 50,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

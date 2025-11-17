import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

export function useCart() {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error("UseCart esta sendo usado sem CartProvider");
    }

    return context;
} 
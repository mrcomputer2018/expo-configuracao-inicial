import { createContext, ReactNode, useState } from "react";
import { CART_ITEMS } from "../constants/cart";

interface CartPoviderProps {
    children: ReactNode;
}

interface CartContextData {
    cart: Cart[];
}

type Cart = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: any;
};

export const CartContext = createContext({} as CartContextData);

export const CartProvider: React.FC<CartPoviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Cart[]>(CART_ITEMS);

    return (
        <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
    );
};

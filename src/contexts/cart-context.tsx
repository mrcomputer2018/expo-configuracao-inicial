import { createContext, ReactNode, useState } from "react";

interface CartPoviderProps {
    children: ReactNode;
}

interface CartContextData {
    cart: Cart[];
}

type Cart = {
    id: string;
};

export const CartContext = createContext({} as CartContextData);

export const CartProvider: React.FC<CartPoviderProps> = ({ children }) => {
    const [cart, setCart ] = useState<Cart[]>([])

    return (
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
};

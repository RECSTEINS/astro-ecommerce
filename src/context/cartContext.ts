// src/context/cartContext.ts
import { createContext } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumb_src: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

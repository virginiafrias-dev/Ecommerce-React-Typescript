import { createContext, Dispatch } from "react";
import { cartAction, CartState } from "./CartReducer";

interface CartContextType {
  state: CartState;
  dispatch: Dispatch<cartAction>;
}

export const CartContext = createContext({} as CartContextType);
// export const CartContext = createContext <CartContextType | undefined>(undefined);      // otra forma de hacerlo

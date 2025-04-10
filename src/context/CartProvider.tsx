import { useReducer, FC, ReactNode } from "react";
import { cartReducer, initalState } from "./CartReducer";
import { CartContext } from "./CartContext";

interface cartProviderPorps {
  children: ReactNode;
}

export const CartProvider: FC<cartProviderPorps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

import Cards from "react-credit-cards-2";
import styles from "./CardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

const CardCredit = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const { dispatch } = useCartContext();

  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Valiar que los campos no estan vacios
    if ([number, name, expiry, cvc].includes("")) {
      // Mostrar un alert o un mensaje de error
      toast.error("All fields are required");
      return;
    }
    //Limpiar el estado
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });
    dispatch({ type: "CLEAR_CART", payload: {} as CartProduct });
  };

  return (
    <div className={styles.container}>
      {/* la libreria React-Credit-Card-2 no funciona para versiones de node nuevas. Se debe buscar otra alternativa u otra libreria*/}
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={cardData.focus as any}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number"> Card Number</label>
          <input
            type="text"
            name="number"
            id="number"
            value={number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name"> Card Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        {/* Grupo */}
        <div className={styles.formInputGrup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Card Expiry</label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              value={expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc"> Card CVC</label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {/* Opcional: hacer las valdaciones de el formulario */}
          </div>
        </div>
        <button type="submit" className={styles.buyButton}>
          Buy Now!
        </button>
      </form>
    </div>
  );
};

export default CardCredit;

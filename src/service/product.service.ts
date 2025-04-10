import { Product } from "../interface";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:3000/products");

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fethc products");
    }
  } catch (error) {
    throw new Error("Network error");
    console.error(error);
  }
};

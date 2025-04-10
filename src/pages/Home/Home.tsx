import { useEffect, useState } from "react";
import CardProduct from "../../Components/ui/CardProduct/CardProduct";
import Hero from "../../Components/ui/Hero/Hero";
import styles from "./Home.module.css";
import { getProducts } from "../../service";
import { Product } from "../../interface";
import { Toaster } from "sonner";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.containerHome}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;

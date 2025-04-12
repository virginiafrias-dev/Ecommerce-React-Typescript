import { useState } from "react";
import CardProduct from "../../Components/ui/CardProduct/CardProduct";
import Hero from "../../Components/ui/Hero/Hero";
import styles from "./Home.module.css";
import { getProducts } from "../../service";
// import { Product } from "../../interface";
import { Toaster } from "sonner";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const Home = () => {
  const [page, setPage] = useState(1);

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });

  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getProducts()
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch(() => {
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {response?.data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          previus page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className={styles.paginationButton}
        >
          next page
        </button>
      </div>
    </>
  );
};

export default Home;

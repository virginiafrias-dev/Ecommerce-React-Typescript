import CardCredit from "../../Components/ui/CardCredit/Cardcredit";
import { Table } from "../../Components/ui/Table/Table";
import styles from "./Checkout.module.css";
import { Toaster } from "sonner";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1} />
      <h1 className={styles.title}>Ckeckout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          <CardCredit />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

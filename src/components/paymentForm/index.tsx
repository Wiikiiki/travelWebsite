import { Input, Card } from "antd";
import styles from "./PaymentForm.module.css";

export const PaymentForm = () => {
  return (
    <Card
      title="信用卡"
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      {/* <Input />
      <Input />
      <Input /> */}
      <label>
        <br />
        <br />
        卡号：
        <Input />
      </label>
    </Card>
  );
};

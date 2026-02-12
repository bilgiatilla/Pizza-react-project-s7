import { Additional } from "./OrderComponents/Additional";
import { DoughSection } from "./OrderComponents/DoughSection";
import { HeaderBanner } from "./OrderComponents/HeaderBanner";
import OrderCount from "./OrderComponents/OrderCount";
import { OrderInfo } from "./OrderComponents/OrderInfo";
import { OrderNote } from "./OrderComponents/OrderNote";
import { OrderSize } from "./OrderComponents/OrderSize";
import { OrderSum } from "./OrderComponents/OrderSum";
import { useState } from "react";

export default function OrderInputForm() {
  const [count, setCount] = useState(1);
  const increaseNum = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseNum = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <>
    <HeaderBanner/>
      <OrderInfo />
      <OrderSize />
      <DoughSection />
      <Additional />
      <OrderNote />
      <OrderSum />
      <OrderCount
        num={count}
        increaseNum={increaseNum}
        decreaseNum={decreaseNum}
      />
    </>
  );
}

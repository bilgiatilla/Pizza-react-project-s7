import { Additional } from "./OrderComponents/Additional";
import { DoughSection } from "./OrderComponents/DoughSection";
import { OrderInfo } from "./OrderComponents/OrderInfo";
import { OrderNote } from "./OrderComponents/OrderNote";
import { OrderSize } from "./OrderComponents/OrderSize";
import { OrderSum } from "./OrderComponents/OrderSum";

export default function OrderInputForm() {
  return (
    <>
        <OrderInfo/>
        <OrderSize/>
        <DoughSection/>
        <Additional/>
        <OrderNote/>
        <OrderSum/>
    </>
    );
}

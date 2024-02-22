import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  return <>{JSON.stringify(cart)}</>;
}

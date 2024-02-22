import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PizzaItem from "./PizzaItem";
export default function Pizzas() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);
  const getPizzas = () => {
    axios
      .get("/api/pizza")
      .then((res) => dispatch({ type: "REFRESH_PIZZAS", payload: res.data }))
      .catch((e) => console.error("Error getting pizzas in Pizzas.jsx: ", e));
  };
  return (
    <>
      {pizzas.map((p) => (
        <PizzaItem {...p} />
      ))}
    </>
  );
}

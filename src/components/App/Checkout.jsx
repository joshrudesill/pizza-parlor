import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const orderID = useSelector((state) => state.orderID);
  const { name, address, city, zip, orderType } = useSelector(
    (state) => state.customerInfo
  );
  const dispatch = useDispatch();
  const checkout = () => {
    axios
      .post("/api/order", {
        customer_name: name,
        street_address: address,
        city,
        zip,
        type: orderType,
        total: cart.reduce((ac, cv) => ac + Number(cv.price), 0),
        pizzas: cart,
      })
      .then((_) => {
        dispatch({ type: "CLEAR_CART" });
        dispatch({ type: "CLEAR_CUSTOMER" });
        dispatch({ type: "CLEAR_ORDERID" });
        history.push("/");
      })
      .catch((e) => console.error(e));
  };
  return (
    <>
      <h1>Step 3: Checkout</h1>
      <div>
        <h3>Address</h3>
        <p>{name}</p>
        <p>{address}</p>
        <p>
          {city} {zip}
        </p>
      </div>
      <div>
        <h3>Order Items</h3>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={checkout}>Checkout</button>
    </>
  );
}

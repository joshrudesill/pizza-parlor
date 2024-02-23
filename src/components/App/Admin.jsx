import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("/api/order")
      .then((r) => setOrders(r.data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>Customer</th>
          <th>Address</th>
          <th>City</th>
          <th>Zip</th>
          <th>Delivery</th>
          <th>Total</th>
        </tr>
        {orders &&
          orders.map((o) => (
            <tr>
              <td>{o.customer_name}</td>
              <td>{o.street_address}</td>
              <td>{o.city}</td>
              <td>{o.zip}</td>
              <td>{o.type}</td>
              <td>{o.total}</td>
            </tr>
          ))}
      </table>
    </>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("/api/order")
      .then((r) => setOrders(r.data))
      .catch((e) => console.error(e));
  }, []);
  return <>{orders && orders.map((o) => <p>{JSON.stringify(o)}</p>)}</>;
}

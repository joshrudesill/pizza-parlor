import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CustomerInfo() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    orderType: "pickup",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const updateForm = (e, t) => {
    setFormData({ ...formData, [t]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch({ type: "ADD_CUSTOMER", payload: { ...formData } });
    setFormData({
      name: "",
      address: "",
      city: "",
      zip: "",
      orderType: "pickup",
    });
    // ^ probably not strictly necessary

    history.push("/checkout");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.name} onChange={(e) => updateForm(e, "name")} />
      <input
        value={formData.address}
        onChange={(e) => updateForm(e, "address")}
      />
      <input value={formData.city} onChange={(e) => updateForm(e, "city")} />
      <input value={formData.zip} onChange={(e) => updateForm(e, "zip")} />
      <select
        value={formData.orderType}
        onChange={(e) => updateForm(e, "orderType")}
      >
        <option value={"pickup"}>Pickup</option>
        <option value={"delivery"}>Delivery</option>
      </select>
      <button>Next</button>
    </form>
  );
}

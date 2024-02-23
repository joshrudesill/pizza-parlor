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
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div style={{ width: "30%", margin: "auto" }}>
      <div>Add your information</div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <input
          value={formData.name}
          onChange={(e) => updateForm(e, "name")}
          placeholder='Name'
        />
        <input
          value={formData.address}
          onChange={(e) => updateForm(e, "address")}
          placeholder='Address'
        />
        <input
          value={formData.city}
          onChange={(e) => updateForm(e, "city")}
          placeholder='City'
        />
        <input
          value={formData.zip}
          onChange={(e) => updateForm(e, "zip")}
          placeholder='Zip'
        />
        <select
          value={formData.orderType}
          onChange={(e) => updateForm(e, "orderType")}
        >
          <option value={"pickup"}>Pickup</option>
          <option value={"delivery"}>Delivery</option>
        </select>
        <button>Next</button>
      </form>
    </div>
  );
}

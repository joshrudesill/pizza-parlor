import { useState } from "react";

export default function CustomerInfo() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    orderType: "Pickup",
  });
  const updateForm = (e, t) => {
    setFormData({ ...formData, [t]: e.target.value });
  };
  return (
    <form>
      <input value={formData.name} onChange={(e) => updateForm(e, "name")} />
      <input
        value={formData.address}
        onChange={(e) => updateForm(e, "address")}
      />
      <input value={formData.city} onChange={(e) => updateForm(e, "city")} />
      <input value={formData.zip} onChange={(e) => updateForm(e, "zip")} />
      <select>
        <option>Pickup</option>
        <option>Delivery</option>
      </select>
    </form>
  );
}

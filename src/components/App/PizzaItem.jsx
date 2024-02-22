import { useDispatch, useSelector } from "react-redux";

export default function PizzaItem({
  name,
  description,
  price,
  image_path,
  id,
}) {
  const dispatch = useDispatch();
  const orderID = useSelector((state) => state.orderID);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        name,
        description,
        price,
        image_path,
        id,
        orderID,
        quantity: 1,
      },
    });
  };
  return (
    <div>
      <li>
        <img src={image_path} width={200} />
      </li>
      <li>{name}</li>
      <li>{description}</li>
      <li>{price}</li>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

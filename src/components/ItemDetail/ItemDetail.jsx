import * as React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const ItemDetail = () => {
  const [isBuy, setIsBuy] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(false);
  const { id } = useParams();
  const { addItem } = useCart();

  const addHandler = (quantity) => {
    setIsBuy(true);
    addItem({ ...items, quantity: quantity });
  };

  React.useEffect(() => {
    const db = getFirestore();

    const productsCollection = db.collection("products");

    const items = productsCollection.doc(id);

    items
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe");
        } else {
          setItems({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => setError(error))
      .finally(() => {});
  }, [id]);

  return (
    <div className="cardDetail">
      <Item
        key={items.id}
        title={items.title}
        description={items.description}
        coin={items.coin}
        price={items.price}
        image={items.image}
      />
      {}
      {!isBuy ? (
        <ItemCount stock="6" initial="1" onAdd={addHandler} />
      ) : (
        <div>
        <Link to="/cart">
          <button>Terminar compra</button>
        </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

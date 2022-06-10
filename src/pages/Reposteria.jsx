import * as React from "react";
import Item from "../components/Item/Item";
import { getFirestore } from "../firebase";
import "./Reposteria.css";

const Reposteria = () => {
  const [data, setData] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();

    const productsCollection = db
      .collection("products")
      .where("categoryId", "==", 2);

    setCargando(true);
    productsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No hay productos");
        } else {
          setData(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch((error) => setError(error))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="reposteria">
      {cargando && <p className="reposteriaLoad">Cargando . . .</p>}
      {data.map((items) => {
        return (
          <Item
            key={items.id}
            productId={items.id}
            title={items.title}
            image={items.image}
            description={items.description}
            price={items.price}
            coin={items.coin}
          />
        );
      })}
    </div>
  );
};

export default Reposteria;

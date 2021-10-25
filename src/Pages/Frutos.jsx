import * as React from "react";
import Item from "../components/Item/Item";
import { getFirestore } from "../firebase";

const Frutos = () => {
  const [data, setData] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();

    const productsCollection = db
      .collection("products")
      .where("categoryId", "==", 3);

    setCargando(true);
    productsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empy) {
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-evently",
        flexWrap: "wrap",
      }}
    >
      {cargando && <p>Cargando . . .</p>}
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

export default Frutos;

import * as React from "react";
import ItemCount from "../components/ItemCount/ItemCount";

export const Counter = () => {
    return (
        <div>
           <h1>Contador</h1>
           <ItemCount stock="5" initial="1"/>
        </div>
    )
}

export default Counter;
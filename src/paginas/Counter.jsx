import * as React from "react";
import ItemCount from "../components/ItemCount/ItemCount";


export const Counter = () => {

    
    return (
        <div>
           <h1>Contador</h1>
           <ItemCount initial="1" stock="5" />
           
        </div>
    );

}
export default Counter;
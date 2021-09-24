import * as React from "react";

const Categories = ({setSelectedCategory}) => {
const [categories, setCategories] = React.useState([]);

    React.useEffect(()=>{

        const categorias =[{
            id: 0,
            name: "Suplementos"
          },
          {id: 1,
            name: "Herboristeria"
          },
          {id: 2,
            name: "Reposteria"
          },
          {id: 3,
            name: "Frutos secos"
          }]

          const getCategories=()=>{
            return new Promise ((resolve) =>{
                setTimeout(()=>{
                    resolve(categorias);
                }, 2000);
            });
        };
        console.log(categorias)
        getCategories().then((result) => setCategories(result))

    }, []);

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
           <select defaultValue="" onChange={handleChange }>
               <option value="" disabled>Seleccione una categoria</option>
               {categories?.map((category)=>(
               <option value={category.id} key={category.id}>
                   {category.name}
                   </option>
               ))}
           </select>
           
        </div>
    )
}

export default Categories;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./customHook";

function ElectronicProduct(){  
    
            //const [data, setData] = useState([]);
            const Navigate=useNavigate();
    
        /*useEffect(() => {
    
            fetch("https://fakestoreapi.com/products/category/electronics")
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error))
        }, [])*/
        const [data] = useFetch("https://fakestoreapi.com/products/category/electronics");
        const Navigar=(id)=>{
            Navigate(`/ProductDetails/${id}`)
        }
    
        const jeweleryProducts = data.map((values) =>
            <span>
                <div onClick={()=>Navigar(values.id)}>
                <b>{values.id} {values.title}</b> 
                </div>
            <br/>
            <div className="container">      
            <img className ="jeweleryImage"src={values.image} alt={values.title} width="10%"/>
            <span className="description">{values.description}</span>
            </div>
            </span>
        )
        return (
            <>
                <div>
                    {data.length > 0 ? (
                        <div className="electronicStyle">{jeweleryProducts}</div>
                    ) : <h3>Loading...</h3>}
                </div>
            </>
    
        );
} export default ElectronicProduct;
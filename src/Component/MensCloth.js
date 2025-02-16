import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MensClothProduct() {


    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    const Navigar = (id)=>{
        navigate(`/ProductDetails/${id}`)
    };
    const jeweleryProducts = data.map((values) =>
        <span> 
            <div onClick={()=>Navigar(values.id)}><b>{values.id}{values.title}</b>
            </div>
            <br />
            <div className="container">
                <img className="jeweleryImage" src={values.image} alt={values.title} width="10%" />
                <span className="description">{values.description}</span>
            </div>
        </span>
    )
    return (
        <>
            <div>
                {data.length > 0 ? (
                    <div className="jeweleryStyle">{jeweleryProducts}</div>
                ) : <h3>Loading...</h3>}
            </div>
        </>

    );

} export default MensClothProduct;
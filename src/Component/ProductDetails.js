import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router';
function ProductDetails() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {setData(data);
        console.log("data is " +data)})
            .catch(error => console.error(error))
    }, [])
    return (    
        <span>
           <b>{data.id}.{data.title}</b>
        <div className="container1">
            <img className="product1Image" src={data.image} alt={data.title} width="10%"></img>
                <span style={{paddingLeft:"10px"}}>{data.description}
                    <br></br>
                     <div style={{padding:"1%"}}><b>Item Price : USD {data.price}</b></div>
                     <div style={{padding:"1%"}}><b><button style={{padding:"10ppx", display:"block"}}><b>Add to Cart</b></button> </b></div>
                                       
                </span>
        </div> 
        </span>
    );
}
export default ProductDetails;
import { useState, useEffect } from "react";
import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";


function ProductCategories() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    // const categoryElement = [];

    // for (let i = 0; i < data.length; i++) {
    //     categoryElement.push(<li class="display_categories">{data[i].toUpperCase()}</li>)
    // }

    const categoryElement= data.map((values)=>

            <span>
            <Link to={`/${values}`}>
            <img src={"./Images/"+`/${values}`+".jpg"} alt={values} style={{ width: '100px', height: '100px', marginRight: '10px' }}/>
            {values.toUpperCase()}</Link>          
            </span> 
    )
    return (
        <>
            <div class="container">
            <div class="display_categories">
                {data.length > 0 ? (
                    <div className='categoryElement'>{categoryElement}</div>

                ) : (<h3>Loading....</h3>)
                }
            </div>            
           
            </div> 
            </>   
    );
} export default ProductCategories; 
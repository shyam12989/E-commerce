import { useEffect, useState } from "react";

function ListOfProducts() {

    const [data, setData] = useState([]);
    const [Limit, setLimit]=useState(5);
    

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${Limit}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [Limit]) 
    
    const increaseLimit=()=>{
        setLimit(previousValue=>previousValue+5);    

    }

    const TableHeaders = () => (
        <thead>
            <tr>
                <th><b>ID</b></th>
                <th><b>Title</b></th>
                <th><b>Item Price</b></th>
                <th><b>Category</b></th>
                <th><b>Image</b></th>
            </tr>
        </thead>
    );
    
    const ProductValues = data.map((values) => (

        <tr>
            <td>{values.id}</td>
            <td>{values.title}</td>
            <td>{values.price}</td>
            <td>{values.category.toUpperCase()}</td>
            <td><img style={{width:"20%"}} src={values.image} alt="itempic"></img></td>
        </tr>
    ));    
    return (
        <>
            <div style={{paddingLeft:"85%", paddingBottom:"10px"}}>                
                <button onClick={increaseLimit} style={{padding:"5px"}}> <b>Increase Products</b></button>
            </div>
            <table className="table">
                <TableHeaders />
                <tbody>
                    {ProductValues}
                </tbody>
            </table>
        </>
    )
} export default ListOfProducts;
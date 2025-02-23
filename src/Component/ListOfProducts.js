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
    
    const increaseLimit=(newLimit)=>{
        setLimit(newLimit);    

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
            <div style={{paddingLeft:"70%", paddingBottom:"10px"}}>  
                <span><b>Increase Product Listing: </b></span>
                <span className="ListingDetails">
                    <span onClick={()=>increaseLimit(5)} style={{padding:"5px"}}> <b>1</b></span>
                    <span onClick={()=>increaseLimit(10)} style={{padding:"5px"}}> <b>2</b></span>
                    <span onClick={()=>increaseLimit(15)} style={{padding:"5px"}}> <b>3</b></span>
                    <span onClick={()=>increaseLimit(20)} style={{padding:"5px"}}> <b>4</b></span>
                </span>
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
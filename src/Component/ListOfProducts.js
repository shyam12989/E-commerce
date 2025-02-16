import { useEffect, useState } from "react";

function ListOfProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

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
            <td><img style={{width:"30%", height:"10%"}} src={values.image} alt="Item image"></img></td>
        </tr>
    ));    
    return (
        <>
            <table className="table">
                <TableHeaders />
                <tbody>
                    {ProductValues}
                </tbody>
            </table>
        </>
    )
} export default ListOfProducts;
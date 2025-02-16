import { useNavigate } from "react-router-dom";

function ProductLists(){    
    const navigate =useNavigate();
 
    const Navigar=()=>{
        navigate(`/products`)
    } 
    return(
        <>
        <span className="productLists">
        <button onClick={Navigar}><b>Products List</b></button>
        </span>       
        </>
    )
} export default ProductLists;
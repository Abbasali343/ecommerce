import { useState } from "react";
import { Container, Title,StyledTable,StyledTh,StyledTd } from "../components.style";
import bike from '../assets/images/bicycle.jpeg'
import AllProducts from "../components/AllProducts";
import ProductDetailView from "../components/ProductDetailView";



export default function AdminProducts(){

    const [details,setDetails] = useState();
const [isDetailed,setIsDetailed] = useState(false);

function detailView(val){
    setDetails(val);
    setIsDetailed(true);
}

function closeDetail(){
    setIsDetailed(false);
}

    

    return(
        <>
        {!isDetailed && <AllProducts view={detailView} />}
        
        {isDetailed && <ProductDetailView state={details} close={closeDetail} />}
        
        </>
    )
}
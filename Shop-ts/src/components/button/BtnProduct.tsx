import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn_Shop } from "./ShoppingButton";

interface btnState{
    id:number,
}

const BtnProduct = ({id}:btnState) =>{
    return <Btn_Product className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
    <Link to={"/products/" + id}>Mua Ngay</Link>
  </Btn_Product>
}

 const Btn_Product = styled(Btn_Shop)`
  margin-top:0 !important;
  
`

export default BtnProduct;
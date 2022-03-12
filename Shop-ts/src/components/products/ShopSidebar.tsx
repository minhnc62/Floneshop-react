import ShopCategories from "./ShopCategories";
import ShopSearch from "./ShopSearch";
import styled from "styled-components";
import ShopColor from "./ShopColor";
import ShopSize from "./ShopSize";
import { getIndividualCategories, getIndividualColors, getProductsIndividualSizes } from "../../helper/product";

const Sidebar = styled.div`
  margin-right: 3rem;
  margin-top: 3rem;
`;
interface sidebarState {
  products: any;
  getSortParams: any;
}

const ShopSidebar = ({ products,getSortParams }: sidebarState) => {

   const uniqueCategories = getIndividualCategories(products);
   const uniqueColors = getIndividualColors(products);
   const uniqueSizes = getProductsIndividualSizes(products);
  
  return (
    <Sidebar>
      {/* shop search */}
      <ShopSearch />

      <ShopCategories 
      categories={uniqueCategories}
        getSortParams={getSortParams}/>
      <ShopColor colors={uniqueColors}
        getSortParams={getSortParams}/> 
      <ShopSize sizes={uniqueSizes}
        getSortParams={getSortParams}/> 
    </Sidebar>
  );
};

export default ShopSidebar;

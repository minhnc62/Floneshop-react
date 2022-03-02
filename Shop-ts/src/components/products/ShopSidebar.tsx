import ShopCategories from "./ShopCategories";
import ShopSearch from "./ShopSearch";
import styled from "styled-components";
import ShopColor from "./ShopColor";
import ShopSize from "./ShopSize";

const Sidebar = styled.div`
    margin-right: 3rem;
    margin-top:3rem

`


const ShopSidebar = () => {
    
  
    return (
      <Sidebar >
        {/* shop search */}
        <ShopSearch />
        
        <ShopCategories/>
        <ShopColor/>
        <ShopSize/>
        
      </Sidebar>
    );
  };

  export default ShopSidebar;
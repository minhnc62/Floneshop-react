import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faTableCells,
  faTableList
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { sm, theme_color, xs } from "../../rootStyledComponent";

const Shop_Top_Bar = styled.div`
margin-top:3rem;
    margin-bottom:3rem;
    display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${xs} {
    display: block;
  }
  @media ${sm} {
    display: flex;
  }
  .select-shoing-wrap {
    display: flex;
    @media ${xs} {
      display: block;
    }
    @media ${sm} {
      display: flex;
    }
    .shop-select {
      margin-right: 50px;
      select {
        font-size: 14px;

        min-width: 143px;
        padding: 5px;

        color: #606060;
        border: 1px solid #e6e6e6;
      }
    }
    
  }
  .shop-tab {
    
    button {
      font-size: 18px;

      margin-left: 20px;
      padding: 0;

      color: #606060;
      border: none;
      background: none;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color:${theme_color};
      }
    }
  }
`

interface topBarState{
  getLayout:any
}
const ShopTopBar = ({getLayout}:topBarState) => {

   const setActiveLayout = (e:any) => {
    const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
    gridSwitchBtn.forEach(item => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <Shop_Top_Bar >
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select>
            <option value="default">Mặc định</option>
            <option value="priceHighToLow">Giá từ cao đến thấp</option>
            <option value="priceLowToHigh">Giá từ thấp đến cao</option>
          </select>
        </div>
        
      </div>

      <div className="shop-tab">
        <button onClick={e => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}>
          <FontAwesomeIcon icon={faTableCellsLarge} />
        </button>
        <button onClick={e => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}>
          <FontAwesomeIcon icon={faTableCells} />
        </button>
        <button  onClick={e => {
            getLayout("list");
            setActiveLayout(e);
          }}>
        <FontAwesomeIcon icon={faTableList} />
        </button>
      </div>
    </Shop_Top_Bar>
  );
};

export default ShopTopBar;

import styled from "styled-components";
import { addWishlish,  clearwishlish,  remove, selectwishlish } from "../redux/wishlishSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { wishlishState } from "../redux/wishlishSlice";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Empty } from "antd";
import { lg, theme_color, xs } from "../rootStyledComponent";
import { productState } from "../redux/productSlice";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnCart from "../components/button/BtnCart";
import BtnProduct from "../components/button/BtnProduct";


const Wishlish_Area = styled.div`
  margin-top: 20rem;
  margin-bottom:30rem;
  .wishlish-page-title {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.5rem 0 1.5rem;
  }
  .wishlish-table-content {
    table {
      border: 1px solid #ebebeb;
      thead > tr {
        border: 1px solid #ebebeb;
        background-color: #f9f9f9;
        th {
          font-size: 14px;
          font-weight: 500;

          padding: 21px 45px 22px;

          text-align: center;
          vertical-align: middle;
          white-space: nowrap;
          text-transform: uppercase;

          color: #333;
          border-top: medium none;
          @media ${lg} {
            padding: 21px 35px 22px;
          }
          @media ${xs} {
            padding: 21px 20px 22px;
          }
        }
      }
      tbody > tr {
        border-bottom: 1px solid #ebebeb;
        td.product-thumbnail {
          width: 150px;
        }
        td.product-name {
          width: 435px;

          text-align: center;
          a {
            font-size: 15px;
            font-weight: 500;

            color: #333;
            &:hover {
              color: $theme-color;
            }
          }
        }
        td.product-price-wishlish {
          width: 435px;
          span {
            font-weight: 500;

            color: #333;
            &.old {
              margin-right: 10px;

              text-decoration: line-through;

              color: #8e8e8e;
            }
          }
        }
        td.product-subtotal {
          font-weight: 500;

          color: #333;
        }
        td.product-quantity {
          width: 435px;
          text-align:center;
          
        }
        td.product-remove {
          width: 100px;
          a,
          button {
            font-size: 17px;

            margin: 0 13px;

            color: #666;
            border: none;
            background: none;
            &:hover {
              color: ${theme_color};
            }
          }
        }
        td.product-wishlist-wishlish > a,
        td.product-wishlist-wishlish > button {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.2;

          display: block;

          margin: 0 auto;
          padding: 10px 15px;

          text-transform: uppercase;

          color: #fff;
          border: none;
          border-radius: 50px;
          background: none;
          background-color: ${theme_color};
          &:hover,
          &.active {
            background-color: #333;
          }
          &:disabled {
            cursor: not-allowed;
          }
        }
        td {
          font-size: 15px;

          padding: 30px 0 30px 30px;

          text-align: center;

          color: #333;
        }
      }
    }
  }
`;

const Wishlish = () => {

  const dispatch = useAppDispatch()
  const wishlish: [] = useAppSelector(selectwishlish);
 


  const handleRemoveFromwishlish = (p:any) => {
    dispatch(remove(p));
  };
  return (
    <Wishlish_Area>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/wishlish"}>Yêu thích</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        {wishlish && wishlish.length >= 1 ? (
          <>
            <h3 className="wishlish-page-title">Mặt hàng được yêu thích</h3>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive wishlish-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>giá</th>
                        <th>Thêm vào giỏ</th>
                        
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlish.map((item: wishlishState, key): any => {
                        return (
                          <tr key={key}>
                            <td className="product-thumbnail">
                              <Link to={"/products/" + item.id}>
                                <img
                                  className="img-fluid"
                                  src={item.image[0]}
                                  alt={item.title}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to={"/products/" + item.id}>
                                {item.title.length > 20
                                  ? item.title.slice(0, 20) + "..."
                                  : item.title}
                              </Link>

                             
                            </td>
                            <td className="product-price-wishlish">
                              {item.discount > 0 ? (
                                <>
                                  <span className="amount old">
                                    {item.price.toFixed(3)} đ
                                  </span>
                                  <span className="amount">
                                    {(
                                      item.price -
                                      item.price * (item.discount / 100)
                                    ).toFixed(3)}{" "}
                                    đ{" "}
                                  </span>
                                </>
                              ) : (
                                <span className="amount">
                                  {item.price.toFixed(3)} đ
                                </span>
                              )}
                            </td>
                            <td className="product-quantity">
                              <div className="wishlish-plus-minus">
                                <BtnCart src={"/products/" + item.id} btnName="Mua ngay"/>
                              </div>
                            </td>
                            
                            <td className="product-remove">
                                  <button
                                  onClick={() => handleRemoveFromwishlish(item)}
                                  >
                                    <FontAwesomeIcon icon={faXmark} />
                                  </button>
                                </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-12 mt-5">
                <div className="d-flex justify-content-between ">
                  <div className="cart-shiping-update">
                    <BtnCart src="/shop" btnName="Tiếp tục mua sắm" />
                  </div>
                  <div
                    className="cart-clear "
                    onClick={() => dispatch(clearwishlish())}
                  >
                    <BtnCart src="" btnName="Xóa giỏ hàng" />
                  </div>
                </div>
              </div>
              
            </div>
          </>
        ) : (
          <Shopping_Btn>
              <Empty />
              <div className="shop">
                <BtnCart src="/shop" btnName="Chọn sản phẩm yêu thích" />
              </div>
            </Shopping_Btn>
        )}
      </div>
    </Wishlish_Area>
  );
};

const Shopping_Btn = styled.div`
  margin-top: 10rem;
  text-align: center;
  .shop {
    margin-top: 3rem;
  }
`;

export default Wishlish;


import styled from "styled-components";
import {
  add,
  decreaseCart,
  removeItem,
  clearCart,
  selectCart,
} from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { cartState } from "../redux/cartSlice";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Empty } from "antd";
import { lg, md, theme_color, xs } from "../rootStyledComponent";

import { useState, useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnCart from "../components/button/BtnCart";


const Cart_Area = styled.div`
  margin-top: 15rem;
  margin-bottom: 10rem;
  .cart-page-title {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.5rem 0 1.5rem;
  }
  .cart-table-content {
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

          text-align: left;
          a {
            font-size: 15px;
            font-weight: 500;

            color: #333;
            &:hover {
              color: ${theme_color};
            }
          }
        }
        td.product-price-cart {
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
          .cart-plus-minus {
            position: relative;

            display: inline-block;

            width: 110px;
            height: 40px;
            padding: 0;
            .qtybutton {
              font-size: 16px;

              position: absolute;

              float: inherit;

              width: 20px;
              margin: 0;

              cursor: pointer;
              transition: all 0.3s ease 0s;
              text-align: center;

              color: #333;
              border: none;
              background: none;
            }
            .dec.qtybutton {
              top: 0;
              left: 0;

              height: 40px;

              border-right: 1px solid #e5e5e5;
            }
            .inc.qtybutton {
              top: 0;
              right: 0;

              height: 40px;

              border-left: 1px solid #e5e5e5;
            }
            input.cart-plus-minus-box {
              font-size: 14px;

              float: left;

              width: 110px;
              height: 40px;
              margin: 0;
              padding: 0;

              text-align: center;

              color: #333;
              border: 1px solid #e1e1e1;
              background: transparent none repeat scroll 0 0;
            }
          }
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
        td.product-wishlist-cart > a,
        td.product-wishlist-cart > button {
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

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart: [] = useAppSelector(selectCart);

  const [totalPrice, setTotalPrice] = useState(0);
  const numberWithCommas = (num: any) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (total, item: cartState) =>
          item.discount > 0
            ? total +
              item.quantity * (item.price - item.price * (item.discount / 100))
            : total + item.quantity * item.price,
        0
      )
    );
  }, [cart]);

 

  const handleRemoveFromCart = (p: any) => {
    dispatch(removeItem(p));
  };
  return (
    <Cart_Area>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/cart"}>Giỏ hàng</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        {cart && cart.length >= 1 ? (
          <>
            <h3 className="cart-page-title">Mặt hàng hiện có</h3>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>đơn giá</th>
                        <th>Số lượng</th>
                        <th>giá</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item: cartState, key): any => {
                        return (
                          <tr key={key}>
                            <td className="product-thumbnail">
                              <Link to={"/products/" + item.id}>
                                <img
                                  className="img-fluid"
                                  src={item.image}
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

                              <div className="cart-item-variation">
                                <span>Color: {item.color}</span>
                                <br />
                                <span>Size: {item.size}</span>
                              </div>
                            </td>
                            <td className="product-price-cart">
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
                              <div className="cart-plus-minus">
                                <button
                                  className="dec qtybutton"
                                  onClick={() => dispatch(decreaseCart(item))}
                                >
                                  -
                                </button>
                                <input
                                  className="cart-plus-minus-box"
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  className="inc qtybutton"
                                  onClick={() => dispatch(add(item))}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              {item.discount > 0 ? (
                                <span>
                                  {(
                                    (item.price -
                                      item.price * (item.discount / 100)) *
                                    item.quantity
                                  ).toFixed(3)}{" "}
                                  đ
                                </span>
                              ) : (
                                <span>
                                  {(item.price * item.quantity).toFixed(3)} đ
                                </span>
                              )}
                            </td>
                            <td className="product-remove">
                              
                                <button
                                  onClick={() => handleRemoveFromCart(item)}
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
              <div className="col-md-7 col-12 mt-5">
                <div className="column">
                  <div className="cart-shiping-update">
                    <BtnCart src="/shop" btnName="Tiếp tục mua sắm" />
                  </div>
                  <div
                    className="cart-clear mt-3"
                    onClick={() => dispatch(clearCart())}
                  >
                    <BtnCart src="" btnName="Xóa giỏ hàng" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 mt-5">
                <Grand_totall>
                  <div className="title-wrap">
                    <h4 className="cart-bottom-title section-bg-gary-cart">
                      Tổng tiền
                    </h4>
                  </div>

                  <h4 className="grand-totall-title">
                    Tổng
                    <span> {numberWithCommas(totalPrice.toFixed(3))}đ</span>
                  </h4>
                  <div className="btn-checkout">
                    <BtnCart src="/checkout" btnName="Thanh toán" />
                  </div>
                </Grand_totall>
              </div>
            </div>
          </>
        ) : (
          <>
            <Shopping_Btn>
              <Empty />
              <div className="shop">
                <BtnCart src="/shop" btnName="Bắt đầu mua sắm" />
              </div>
            </Shopping_Btn>
          </>
        )}
      </div>
    </Cart_Area>
  );
};
const Shopping_Btn = styled.div`
  margin-top: 10rem;
  text-align: center;
  .shop {
    margin-top: 3rem;
  }
`;

const Grand_totall = styled.div`
  padding: 4.5rem 3rem 5rem;

  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #f9f9f9;
  /* @media ${lg} {
    padding: 45px 18px 50px;
  } */
  /* @media ${md} {
    margin-top: 3rem;
  } */
  .title-wrap {
    position: relative;
    &::before {
      position: absolute;
      z-index: 1;
      top: 1rem;
      left: 0;

      width: 100%;
      height: 1px;

      content: "";
      transition: all 0.4s ease 0s;

      background-color: #e3e1e1;
    }
    h4.cart-bottom-title {
      font-size: 2.2rem;
      font-weight: 500;

      display: inline-block;

      margin: 0;
      padding-right: 1.8rem;
    }
    .section-bg-gary-cart {
      position: relative;
      z-index: 9;

      background-color: #f9f9f9;
    }
  }
  h4.grand-totall-title {
    font-size: 2rem;
    font-weight: 500;
    margin: 3rem 0 3rem;

    color: ${theme_color};
    span {
      float: right;
    }
  }
  .btn-checkout {
    text-align: center;
  }
`;
export default Cart;

import { Breadcrumb } from "antd";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BtnCart from "../components/button/BtnCart";
import { cartState, selectCart } from "../redux/cartSlice";
import { useAppSelector } from "../redux/hooks";
import { lg, theme_color, xs } from "../rootStyledComponent";
import { message } from 'antd';



const Checkout = () => {
  const cart: [] = useAppSelector(selectCart);

  const [totalPrice, setTotalPrice] = useState(0);
  const numberWithCommas = (num: any) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (total, item: cartState) =>
          item.discount > 0
            ? (total + item.quantity * (
              item.price -
              item.price * (item.discount / 100))
            )
            : total + (item.quantity) * (item.price),
        0
      )
    );
  }, [cart]);

  const success = () => {
    message.success('Đặt hàng thành công');
  };
  return (
    <Checkout_Area>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to={"/cart"}>Thanh toán</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="row">
          <div className="col-lg-7">
            <div className="billing-info-wrap mt-5">
              <h3>Chi tiết thanh toán</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                
                <div className="col-lg-12">
                  <div className="billing-info mb-20">
                    <label>Street Address</label>
                    <input
                      className="billing-address"
                      placeholder="House number and street name"
                      type="text"
                    />
                    <input
                      placeholder="Apartment, suite, unit etc."
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="billing-info mb-20">
                    <label>Town / City</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>State / County</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>Postcode / ZIP</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>Phone</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20">
                    <label>Email Address</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="additional-info-wrap">
                <h4>Thông tin thêm</h4>
                <div className="additional-info">
                  <label>Ghi chú đơn hàng</label>
                  <textarea
                    placeholder=" Ghi chú"
                    name="message"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <Order_Area>
              <h3>Đơn hàng của bạn</h3>
              <div className="your-order-wrap gray-bg-4">
                <div className="your-order-product-info">
                  <div className="your-order-top">
                    <ul>
                      <li>Sản phẩm</li>
                      <li>Tổng</li>
                    </ul>
                  </div>
                  <div className="your-order-middle">
                    <ul>
                      {cart.map((item: cartState, key) => {
                        return (
                          <li key={key}>
                            <div className="d-flex align-items-center justify-content-between">
                              <img src={item.image} alt="" />
                              <span className="order-middle-left col-8">
                                {item.title.length > 20
                                  ? item.title.slice(0, 15) + "..."
                                  : item.title}{" "}
                                X {item.quantity}
                              </span>
                              <span className="order-price">
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
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="your-order-bottom">
                    <ul>
                      <li className="your-order-shipping">Shipping</li>
                      <li>Free shipping</li>
                    </ul>
                  </div>
                  <div className="your-order-total">
                    <ul>
                      <li className="order-total">Tổng</li>
                      <li>{numberWithCommas((totalPrice).toFixed(3))}đ</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Place_Order className="place-order mt-25" onClick={success}>
                <BtnCart src="" btnName="Thanh toán" />
              </Place_Order>
            </Order_Area>
          </div>
        </div>
      </div>
    </Checkout_Area>
  );
};

const Checkout_Area = styled.div`
  margin-top: 15rem;
  margin-bottom: 10rem;
  .billing-info-wrap {
    h3 {
      font-size: 20px;
      font-weight: 500;

      margin: 0 0 20px;

      color: #000;
    }
    .billing-info {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      display: flex;
      flex-direction: column;
    }
    .billing-info,
    .billing-select {
      label {
        margin: 0 0.5rem 0.8rem;

        color: #000;
      }
      input {
        font-size: 1.4rem;
        height: 4.5rem;
        padding-right: 1rem;
        padding-left: 2rem;
        color: #333;
        border: 1px solid #e6e6e6;
        background: transparent none repeat scroll 0 0;
      }
      input.billing-address {
        margin-bottom: 1rem;
      }
    }
    .billing-select {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      select {
        font-size: 1.4rem;

        height: 4.5rem;
        padding: 2px 2rem;

        cursor: pointer;

        color: #333;
        border: 1px solid #e6e6e6;

        -webkit-appearance: none;
        -moz-appearance: none;
      }
    }
    .checkout-account {
      display: flex;
      align-items: center;
      input {
        display: inline-block;
        float: left;
        width: 10px;
        height: 10px;

        border: 1px solid #9fa0a2;
      }
      span {
        font-weight: 400;

        margin: 0 0 0 12px;

        color: #333;
      }
    }
    .checkout-account-toggle {
      input {
        font-size: 14px;

        margin: 0 0 20px;
        padding-right: 10px;
        padding-left: 20px;

        color: #333;
        border: 1px solid #e6e6e6;
        background: transparent none repeat scroll 0 0;
      }
      button.checkout-btn {
        font-weight: 500;

        z-index: 9;

        padding: 10px 30px;

        cursor: pointer;
        text-transform: uppercase;

        color: #fff;
        border: medium none;
        border-radius: 50px;
        background-color: ${theme_color};
        &:hover {
          background-color: #333;
        }
      }
    }
    .additional-info-wrap {
      h4 {
        font-size: 16px;
        font-weight: 500;
      }
      .additional-info {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        label {
          font-size: 14px;

          margin: 0 0 7px;

          color: #333;
        }
        textarea {
          font-size: 14px;

          height: 138px;
          padding: 17px 20px;

          color: #333;
          border: 1px solid #e6e6e6;
          background: transparent none repeat scroll 0 0;
        }
      }
    }
    .different-address {
      display: none;
    }
  }
`;

const Order_Area = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 500;

    margin: 0 0 20px;

    color: #000;
  }
  .your-order-wrap {
    padding: 38px 45px 44px;

    background: #f6f6f6;
    @media ${lg} {
      padding: 30px 20px 36px;
    }
    @media ${xs} {
      padding: 30px 20px 36px;
    }
    .your-order-product-info {
      .your-order-top {
        ul {
          display: flex;
          justify-content: space-between;
          li {
            font-size: 1.6rem;
            font-weight: 500;

            list-style: outside none none;
          }
        }
      }
      .your-order-middle {
        font-size: 1.4rem;
        margin: 29px 0;
        padding: 19px 0 18px;

        border-top: 1px solid #dee0e4;
        border-bottom: 1px solid #dee0e4;
        ul {
          li {
            display: flex;
            justify-content: space-between;

            margin: 0 0 10px;
            img {
              width: 10%;
            }
          }
        }
      }
      .your-order-bottom {
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            font-size: 14px;
            font-weight: 400;

            list-style: none;
          }
          li.your-order-shipping {
            font-size: 16px;
            font-weight: 400;

            color: #212121;
          }
        }
      }
      .your-order-total {
        margin: 18px 0 33px;
        padding: 17px 0 19px;

        border-top: 1px solid #dee0e4;
        border-bottom: 1px solid #dee0e4;
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li.order-total {
            font-size: 18px;
            font-weight: 500;

            color: #212121;
          }
          li {
            font-size: 16px;
            font-weight: 500;

            list-style: outside none none;

            color: ${theme_color};
          }
        }
      }
    }
  }
`;

const Place_Order = styled.div`
  margin-top: 3rem;
`;
export default Checkout;

import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Radio } from "antd";
import { add } from "../../redux/cartSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectProductApi } from "../../redux/productSlice";
import { Link } from "react-router-dom";
import { theme_color, xs } from "../../rootStyledComponent";
const Product_Detail_Price = styled.div`
  margin: 1.5rem 0;
  span {
    font-size: 2rem;
    font-weight: 500;
    position: relative;

    color: #c61a32;
  }
  .cross {
    color: #000;
  }
  .old {
    text-decoration: line-through;
    color: #8e8e8e;
  }
`;
interface modalState {
  id: number;
  title: string;
  price: number;
  image: any;
  color: any;
  size: any;
  discount: number;
  description: string;
  show: any;
  onHide: any;
}

const ProductModal = ({
  id,
  title,
  price,
  image,
  discount,
  description,
  show,
  onHide,
  color,
  size,
}: modalState) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(selectProductApi);

  const [images, setImages] = useState(null);
  const [selectedProductColor, setSelectedProductColor] = useState(color[0]);
  const [selectedProductSize, setSelectedProductSize] = useState(size[0]);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type: any) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
    setSelectedProductColor(color[0]);
    setSelectedProductSize(size[0]);
  }, [products]);

  const addToCart = () => {
    let newItem = {
      id: id,
      discount:discount,
      title: title,
      image: image[0],
      color: selectedProductColor,
      size: selectedProductSize,
      price: price,
      quantity: quantity,
    };
    dispatch(add(newItem));
  };

  useEffect(() => {
    setImages(
      image.map((item: any) => ({
        original: item,
        thumbnail: item,
      }))
    );
  }, []);

  return (
    <Product_Modal>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              {images ? <ImageGallery items={images} /> : null}
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <Product_Detail_Content className="product-details-content quickview-content">
                <h2>{title}</h2>
                <div className="product-details-price">
                  <Product_Detail_Price>
                    {discount > 0 ? (
                      <>
                        <span>
                          {(price - price * (discount / 100)).toFixed(3)} đ{" "}
                        </span>
                        <span className="cross"> &#8211; </span>
                        <span className="old">{price.toFixed(3)} đ</span>
                      </>
                    ) : (
                      <span> {price.toFixed(3)} đ</span>
                    )}
                  </Product_Detail_Price>
                </div>
                <div className="pro-details-list">
                  <p>{description}</p>
                </div>
                <div className="pro-details-color-wrap">
                  <span className="title-wrap">Màu</span>
                  <div className="pro-details-color-content">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio
                        onChange={() => {
                          setSelectedProductColor(color[0]);
                        }}
                        value={1}
                      >
                        {color[0]}
                      </Radio>
                      <Radio
                        value={2}
                        onChange={() => {
                          setSelectedProductColor(color[1]);
                        }}
                      >
                        {color[1]}
                      </Radio>
                      <Radio
                        value={3}
                        onChange={() => {
                          setSelectedProductColor(color[2]);
                        }}
                      >
                        {color[2]}
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="pro-details-size-wrap">
                  <span className="title-wrap">Kích thước</span>
                  <div className="pro-details-size-content">
                    <Radio.Group buttonStyle="solid" defaultValue={1}>
                      <Radio.Button
                        onChange={() => {
                          setSelectedProductSize(size[0]);
                        }}
                        value={1}
                      >
                        {size[0]}
                      </Radio.Button>
                      <Radio.Button
                        value={2}
                        onChange={() => {
                          setSelectedProductSize(size[1]);
                        }}
                      >
                        {size[1]}
                      </Radio.Button>
                      <Radio.Button
                        value={3}
                        onChange={() => {
                          setSelectedProductSize(size[2]);
                        }}
                      >
                        {size[2]}
                      </Radio.Button>
                      {size[3] ? (
                        <Radio.Button
                          value={4}
                          onChange={() => {
                            setSelectedProductSize(size[3]);
                          }}
                        >
                          {size[3]}
                        </Radio.Button>
                      ) : (
                        ""
                      )}
                    </Radio.Group>
                  </div>
                </div>
                <Product_Number>
                  <span className="title-wrap">Số lượng</span>
                  <div className=" marin-top-1 d-flex justify-content-start text-center">
                
                    <button
                      className="quantity__btn "
                      onClick={() => updateQuantity("minus")}
                    >
                      {" "}
                      &#8722;
                    </button>
                    <div className=" quantity__input">{quantity}</div>
                    <button
                      className="quantity__btn "
                      onClick={() => updateQuantity("plus")}
                    >
                      {" "}
                      &#43;
                    </button>
                    
                  </div>
                </Product_Number>
                <Link to={"/cart"}>
                <Button_add
                  onClick={() => addToCart()}
                  className=" add funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover"
                >
                  Mua ngay
                </Button_add>
                </Link>
                
                <Button_add
                  onClick={() => addToCart()}
                  className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover"
                >
                  Thêm vào giỏ
                </Button_add>
              </Product_Detail_Content>
            </div>
          </div>
        </div>
      </Modal>
    </Product_Modal>
  );
};

const Product_Modal = styled.div``;
const Product_Detail_Content = styled.div`
  h2 {
    font-size: 2rem;
    color: #010101;
  }
  .pro-details-list {
    p {
      font-size: 1.6rem;
      color: #333;
    }
  }
  span {
    font-size: 1.6rem;
  }
  .title-wrap {
    font-weight: 500;
  }
  .pro-details-color-content,
  .pro-details-size-content {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

const Product_Number = styled.div`
  margin-bottom: 1.5rem;
  .marin-top-1 {
    margin-top: 1rem;
  }
  .quantity__btn {
    font-size: 1.6rem;
    padding: 0.6rem 1rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  .quantity__input {
    font-size: 1.6rem;
    padding: 0.6rem 2rem;
    margin: 0 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.3rem;
  }
`;

export const Button_add = styled.div`
cursor: pointer;
  &.add{
    margin-right:.5rem;
  }
  &.funfact-btn {
    width:20rem;
    text-align:center;
    @media ${xs} {
      margin-top: 1rem;
    }
    line-height: 1;
      z-index: 1;
      display: inline-block;
      padding: 16px;
      color: #fff;
      border: 1px solid transparent;
      background-color: #000;
      &:hover {
        border: 1px solid ${theme_color};
      }
    a {
      color:#fff;
      max-width:20rem;
    }
  }
  &.funfact-btn--round-shape {
    overflow: hidden;
      border-radius: 30px;
      font-size: 1.4rem;
   }
  &.funfact-btn-red {
    background-color: #ff4d4f;
      &:hover {
        border: 1px solid ${theme_color};
      }
  }
  &.btn-hover {
    position: relative;

transition: all 0.5s ease-in-out 0s;
&:hover {
  color: #fff;
  border: 1px solid ${theme_color};
}
&::before,
&::after {
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
&::after {
  right: 0;
  left: auto;
  width: 0;
  background: ${theme_color};
}
&:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}
}
  
`;
export default ProductModal;

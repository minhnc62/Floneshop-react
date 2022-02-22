import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import { Container, Row } from "react-bootstrap"
import "./header.css"


const Header =  ({
    iconWhiteClass }) => {

    // const handleClick = e => {
    //     e.currentTarget.nextSibling.classList.toggle("active");
    // };

    // const triggerMobileMenu = () => {
    //     const offcanvasMobileMenu = document.querySelector(
    //         "#offcanvas-mobile-menu"
    //     );
    //     offcanvasMobileMenu.classList.add("active");
    // };



    return <header className=" header-padding-2 sticky-bar header-res-padding clearfix   ">
        <Container fluid>
            <Row >
                <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                    <div className="logo">
                        <Link to={"/"}>
                            <img src="image/logo-black.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className=" main-menu  ">
                        <nav >
                            <ul>
                                <li>
                                    <NavLink className="link" to={"/"}>Home </NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to={"/shop"}>Cửa Hàng</NavLink>

                                </li>
                                <li>
                                    <NavLink className="link" to={"/about"}>Gioi Thieu</NavLink>

                                </li>
                                <li>
                                    <NavLink className="link" to={"/contact"}>Liên Hệ</NavLink>
                                </li>
                            </ul>




                        </nav>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                    <div className="header-right-wrap   ">
                        <div
                            className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
                        >
                            <div className="same-style header-search d-none d-lg-block">
                                <button className="search-active">
                                    <i className="pe-7s-search" />
                                </button>
                                <div className="search-content">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button className="button-search">
                                            <i className="pe-7s-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="same-style account-setting d-none d-lg-block">
                                <button
                                    className="account-setting-active"

                                >
                                    <i className="pe-7s-user-female" />
                                </button>
                                <div className="account-dropdown">
                                    <ul>
                                        <li>
                                            <Link to={"/"}>Login</Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                my account
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="same-style header-wishlist">
                                <Link to={"/"}>
                                    <i className="pe-7s-like" />
                                    <span className="count-style">
                                        0
                                        {/* {wishlistData && wishlistData.length ? wishlistData.length : 0} */}
                                    </span>
                                </Link>
                            </div>
                            <div className="same-style cart-wrap d-none d-lg-block">
                                <button className="icon-cart" >
                                    <i className="pe-7s-shopbag" />
                                    <span className="count-style">
                                        0
                                        {/* {cartData && cartData.length ? cartData.length : 0} */}
                                    </span>
                                </button>
                                {/* menu cart */}
                                {/* <MenuCart
                                    cartData={cartData}
                                    currency={currency}
                                    deleteFromCart={deleteFromCart}
                                /> */}
                            </div>
                            <div className="same-style cart-wrap d-block d-lg-none">
                                <Link className="icon-cart" to={"/"}>
                                    <i className="pe-7s-shopbag" />
                                    <span className="count-style">
                                        0
                                        {/* {cartData && cartData.length ? cartData.length : 0} */}
                                    </span>
                                </Link>
                            </div>
                            <div className="same-style mobile-off-canvas d-block d-lg-none">
                                <button
                                    className="mobile-aside-button"

                                >
                                    <i className="pe-7s-menu" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>


    </header>
} 

Header.propTypes = ({

    iconWhiteClass: PropTypes.string,

});

export default Header;
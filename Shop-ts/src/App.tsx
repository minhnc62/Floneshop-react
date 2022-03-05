import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { BackTop } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { theme_color } from "./rootStyledComponent";

const Main_App = styled.main`
  .backup {
    position: fixed;
    text-align: center;
    background-color: ${theme_color};
    font-size: 1.4rem;
    line-height:4rem;
    width: 4rem;
    height: 4rem;
    right: 2rem;
    bottom: 6rem;
    color: #fff;
    border-radius: 5rem;
  }
`;
function App() {
  return (
    <Main_App className="App">
      <ToastContainer />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <BackTop>
        <div className="backup">
          <FontAwesomeIcon icon={faAnglesUp} />
        </div>
      </BackTop>
      <Footer />
    </Main_App>
  );
}

export default App;

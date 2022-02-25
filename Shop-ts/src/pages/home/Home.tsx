import { BackTop } from "antd";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import Slider from "../../components/Slider";
import CountDownPromotion from "../../components/countdown/CountDownPromotion";
import Feature from "../../components/feature/Feature";
import SubscribeEmail from "../../components/subscribeEmail/SubscribeEmail";
import { md } from "../../rootStyledComponent";
const style: any = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const HomeContent = styled.div`
  
  margin-top:10rem;
  @media ${md} {
    margin-top:5rem;

    }
`;

export default () => {
  return (
    <HomeContent>
      <Slider/>
      <Banner/>
      <CountDownPromotion/>
      <Feature/>
      <SubscribeEmail/>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </HomeContent>
  );
};

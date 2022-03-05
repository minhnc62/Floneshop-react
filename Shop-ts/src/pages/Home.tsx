
import styled from "styled-components";
import Banner from "../components/banner/Banner";
import Slider from "../components/Slider";
import CountDownPromotion from "../components/countdown/CountDownPromotion";
import Feature from "../components/feature/Feature";
import SubscribeEmail from "../components/subscribeEmail/SubscribeEmail";
import { md, xs } from "../rootStyledComponent";
import TabProduct from "../components/products/TabProduct";


const HomeContent = styled.div`
  
  margin-top:10rem;
  @media ${md} {
    margin-top:5rem;

}
@media ${xs} {
    margin-top:5rem;

}
`;

export default () => {
  return (
    <HomeContent>
      <Slider/>
      <TabProduct/>
      <Banner/>
      <CountDownPromotion/>
      <Feature/>
      <SubscribeEmail/>
      
    </HomeContent>
  );
};

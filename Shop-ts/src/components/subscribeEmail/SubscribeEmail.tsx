import styled from "styled-components";
import { md, xs } from "../../rootStyledComponent";
import SubscriptionForm from "./SubscriptionForm";
const Subscribe_Area = styled.div`
.container-fluid{
  width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
  &.pt-100 {
    padding-top: 10rem;
    @media ${xs} {
      padding-top: 60px;
    }
  }
  &.pb-100 {
    padding-bottom: 10rem;
    @media ${xs} {
      padding-bottom: 30px;
    }
  }
  .subscribe-style-3 {
    h2 {
      font-size: 48px;
      margin: 0 0 23px;
      color: #010101;
      @media ${xs} {
        font-size: 35px;

        margin: 0 0 12px;
      }
      @media ${md} {
        font-size: 40px;
      }
    }
    p {
      font-size: 16px;
      line-height: 1.5;

      margin: 0;

      color: #696969;
    }
  }
`;



const SubscribeEmail = () => {
  return (
    <Subscribe_Area className= "pt-100 pb-100 ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 m-auto">
            <div className={`subscribe-style-3 text-center `}>
              <h2>Join With Us! </h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              {/* subscription form */}
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </div>
    </Subscribe_Area>
  );
};

export default SubscribeEmail;

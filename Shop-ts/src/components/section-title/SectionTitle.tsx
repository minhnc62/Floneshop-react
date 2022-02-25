import styled from "styled-components";
import { lg, md, xs } from "../../rootStyledComponent";

const Welcome_Area = styled.div`
  &.pb-100 {
    padding-bottom: 10rem;
    @media ${xs} {
      padding-bottom: 30px;
    }
  }
  &.pb-95 {
    padding-bottom: 95px;
    @media ${xs} {
      padding-bottom: 55px;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 1.6rem;
    color: #666;
    margin: 0;
    letter-spacing: 0.3px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin: 8px 0 3rem;
    color: #433f3f;
    position: relative;
    display: inline-block;
    padding: 0 0 2.3rem;
    line-height: 1;
    &:before {
      position: absolute;
      background-color: #070508;
      height: 3px;
      width: 7rem;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
    }
  }
  p {
    font-size: 1.6rem;
    color: #4b4b4b;
    line-height: 3rem;
    width: 66%;
    margin: 0 auto;
    @media ${lg} {
      width: 80%;
    }
    @media ${md} {
      width: 95%;
    }
    @media ${xs} {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

const SectionTitle = () => {
  return (
    <Welcome_Area className="pt-100 pb-95 ">
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Flone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure
          </p>
        </div>
      </div>
    </Welcome_Area>
  );
};

export default SectionTitle;

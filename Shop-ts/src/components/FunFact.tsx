import styled from "styled-components";
import { md, theme_color, xs } from "../rootStyledComponent";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faTrophy,faLightbulb, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const Funfact_Area = styled.div`
text-align:center;
margin-bottom:10rem;
  position: relative;
  background-color: #f7f7f7;
  &.pt-100 {
    padding-top: 10rem;
    @media ${xs} {
      padding-top: 6rem;
    }
  }
  &.pb-70 {
    padding-bottom: 7rem;
    @media ${xs} {
      padding-bottom: 3rem;
    }
  }
  .single-count {
  .count-icon {
    i {
      font-size: 5rem;
      color:#fa6bff;
      line-height: 1;
      display: inline-block;
      @media ${md} {
        font-size: 45px;
      }
      @media ${xs} {
        font-size: 45px;
      }
    }
  }
  h2 {
    & > span {
      color: ${theme_color};
      font-size: 40px;
      font-weight: bold;
      margin: 25px 0 12px;
      display: inline-block;
      @media ${md} {
        margin: 10px 0 8px;
        font-size: 35px;
      }
      @media ${xs} {
        margin: 6px 0 8px;
        font-size: 35px;
      }
    }
  }
  span {
    color: #333;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 500;
  }
}
`;

const Single_Count = styled.div`
  .count-icon {
    font-size: 5rem;
    line-height: 1;
    display: inline-block;
    @media ${md} {
      font-size: 4.5rem;
    }
    @media ${xs} {
      font-size: 4.5rem;
    }
  }
`;
const FunFact = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible: Boolean) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
    <Funfact_Area className="pt-100 pb-70">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Single_Count className="single-count ">
              <div className="count-icon">
               <i><FontAwesomeIcon icon={faBriefcase} /></i> 
              </div>
              <h2 className="count">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 360 : 0} />
                </VisibilitySensor>
              </h2>
              <span>Project Done</span>
            </Single_Count>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Single_Count className="single-count ">
              <div className="count-icon">
              <i><FontAwesomeIcon icon={faTrophy}/></i>
              </div>
              <h2 className="count">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 690 : 0} />
                </VisibilitySensor>
              </h2>
              <span>Cups Of Coffee</span>
            </Single_Count>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Single_Count className="single-count ">
              <div className="count-icon">
                <i><FontAwesomeIcon icon={faLightbulb}/></i>
              </div>
              <h2 className="count">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 100 : 0} />
                </VisibilitySensor>
              </h2>
              <span>Branding</span>
            </Single_Count>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Single_Count className="single-count ">
              <div className="count-icon">
               <i><FontAwesomeIcon icon={faFaceSmile} /></i> 
              </div>
              <h2 className="count">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 360 : 0} />
                </VisibilitySensor>
              </h2>
              <span>Happy Clients</span>
            </Single_Count>
          </div>
        </div>
      </div>
    </Funfact_Area>
  );
};

export default FunFact;

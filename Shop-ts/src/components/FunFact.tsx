import styled from "styled-components";
import { md, xs } from "../rootStyledComponent";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const Funfact_Area = styled.div`
  position: relative;
  background-color: #f7f7f7;
  &.pt-100 {
    padding-top: 100px;
    @media ${xs} {
      padding-top: 60px;
    }
  }
  &.pb-70 {
    padding-bottom: 70px;
    @media ${xs} {
      padding-bottom: 30px;
    }
  }
`;

const Single_Count = styled.div`
  .count-icon {
    font-size: 50px;
    line-height: 1;
    display: inline-block;
    @media ${md} {
      font-size: 45px;
    }
    @media ${xs} {
      font-size: 45px;
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
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Single_Count className="single-count ">
              <div className="count-icon">
                <FontAwesomeIcon icon={faBriefcase} />
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
              <span>project done</span>
            </Single_Count>
          </div>
        </div>
      </div>
    </Funfact_Area>
  );
};

export default FunFact;

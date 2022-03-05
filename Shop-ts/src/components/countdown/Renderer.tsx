import styled from "styled-components";
import { lg, xs } from "../../rootStyledComponent";

const Timer = styled.div`
  margin: 65px 0 0;

  text-align: center;
  @media ${lg} {
    margin: 44px 0 0;
  }
  @media ${xs} {
    margin: 24px 0 0;
  }
  span {
    font-size: 48px;
    font-weight: 400;
    display: inline-block;
    min-width: 75px;
    margin: 0 32px;
    color: #555;
    @media ${lg} {
      font-size: 40px;
      margin: 0 15px;
    }
    @media ${xs} {
      font-size: 22px;
      min-width: 55px;
      margin: 0 5px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      margin: 34px 0 0;
      text-transform: uppercase;
      color: #555;
      @media ${lg} {
        margin: 24px 0 0;
      }
      @media ${xs} {
        font-size: 14px;

        margin: 12px 0 0;
      }
    }
  }
`;
interface rendererState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Renderer = ({ days, hours, minutes, seconds }: rendererState) => {
  return (
    <Timer className=" timer-style">
      <div>
        <span className="cdown day">
          {days} <p>Ngày</p>
        </span>
        <span className="cdown hour">
          {hours} <p>Giờ</p>
        </span>
        <span className="cdown minutes">
          {minutes} <p>Phút</p>
        </span>
        <span>
          {seconds} <p>Giây</p>
        </span>
      </div>
    </Timer>
  );
};
export default Renderer;

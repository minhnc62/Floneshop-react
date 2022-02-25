import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { theme_color, xs } from "../../rootStyledComponent";

const Subscribe_Form = styled.div`
  margin-top: 3.5rem;
  .mc-form {
    position: relative;
    input {
      height: 46px;
      width: 50rem;
      font-size: 1.4rem;
      text-align: center;

      color: #333;
      border: none;
      border-bottom: 2px solid #e2e2e2;
      background: transparent;
      &:focus {
        outline: 0;
      }
    }
    .clear-3 {
      margin-top: 40px;
      input,
      button {
        font-weight: 500;
        line-height: 1;

        width: auto;
        height: auto;
        padding: 17px 55px;

        letter-spacing: 2px;
        text-transform: uppercase;

        color: #fff;
        border: none;
        border-radius: 5px;
        background: none;
        background-color: #070508;
        &:hover {
          background-color: ${theme_color};
        }
      }
    }
    .funfact-btn {
      margin-top: 43px;
      @media ${xs} {
        margin-top: 23px;
      }
      button {
        line-height: 1;
        z-index: 1;
        display: inline-block;
        padding: 16px 56px;
        color: #fff;
        border: 1px solid transparent;
        background-color: #000;
        &:hover {
          border: 1px solid ${theme_color};
        }
      }
    }
    .funfact-btn-red {
      button {
        background-color: #c61a32;
        &:hover {
          border: 1px solid ${theme_color};
        }
      }
    }
    .btn-hover {
      button {
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
    }
    .funfact-btn--round-shape {
      button {
        overflow: hidden;
        border-radius: 30px;
        font-size: 1.4rem;
      }
    }
  }
`;

interface formSubscribeState {
  onValidated: any;
  status: any;
  message: any;
}

const CustomForm = ({ status, onValidated, message }: formSubscribeState) => {
  let email: any;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });

    email.value = "";
  };
  return (
    <Subscribe_Form>
      <div className="mc-form">
        <div>
          <input
            className="email"
            ref={(node): any => (email = node)}
            type="email"
            placeholder="Your Email Address"
            required
          />
        </div>
        {status === "sending" && (
          <div style={{ color: "#3498db", fontSize: "1.4rem" }}>sending...</div>
        )}
        {status === "error" && (
          <div style={{ color: "#e74c3c", fontSize: "1.4rem" }}>
            <span>{message}</span>
          </div>
        )}
        {status === "success" && (
          <div style={{ color: "#2ecc71", fontSize: "1.4rem" }}>
            <span>{message}</span>
          </div>
        )}
        <div className="clear-3 funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover ">
          <button className="button" onClick={submit}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </Subscribe_Form>
  );
};

const SubscriptionForm = () => {
  return (
    <div>
      <MailchimpSubscribe
        url="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default SubscriptionForm;

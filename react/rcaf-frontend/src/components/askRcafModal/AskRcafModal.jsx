import { Link } from "react-router-dom";
import './AskRcafModal.css'

const AskRacafModal = () => {
  return (
    <div className="ask-rcaf-modal-container">
      <div className="ask-rcaf-modal-top">
        <h1 className="ask-rcaf-modal-top-title">Anonymous Submission</h1>
        <p className="ask-rcaf-modal-top-paragraph">
          Submit your RCAF anonymously. Upon completion, a unique code will be
          generated, enabling you to track the status of your request securely.
        </p>
        <Link to={"/"}>Submit Anonymously</Link>
      </div>
      <div className="ask-rcaf-modal-bottom">
        <h1 className="ask-rcaf-modal-bottom-title">Submit with an Account</h1>
        <p className="ask-rcaf-modal-bottom-paragraph">
          Use your Gmail account to submit an RCAF. This allows you to manage
          and track your submissions more efficiently.
        </p>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"} className="secondary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default AskRacafModal;

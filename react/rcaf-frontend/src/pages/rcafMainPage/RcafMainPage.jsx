import 'react';
import './RcafMainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RcafMainPage() {
  return (
    <div>
      <div className="rcaf-main-page">
        <div className="middle-content">
          <h1>R C A F</h1>
          <p>
            Welcome to our RACF system. Here you can register your requests, complaints, claims, or suggestions to help us improve and offer you a better experience. Complete the required fields and send us your request.
          </p>
          <div className="middle-content-buttons">
            <button className="btn-make-rcaf">Make RCAF</button>
            <button className="btn-follow-rcaf">Follow RCAF</button>
          </div>
        </div>
      </div>
      <div className='rcaf-description'>
        <div className='rcaf-description-text'>
          <h1>Make RCAF</h1>
          <p>A RACF is a mechanism through which users can submit Requests, Complaints, Claims or Suggestions related to the services or products of an organization. In this system, each registered request will be attended to and responded to in a timely manner, ensuring that we offer an adequate solution or take your opinion into account to improve our processes. Your participation is essential to guarantee a better service.</p>
        </div>
        <div className='rcaf-description-img'></div>
      </div>

      <div className="information-notes">
        <div className="notes-title">
          <h1>Information Notes</h1>
        </div>
        <div className="notes-container">
          <div className="note">
            <h2>1. Response Time</h2>
            <p>RCAFs will be attended to within a maximum of 15 business days, depending on the complexity of the request. In exceptional cases, the user will be notified if additional time is required.</p>
          </div>
          <div className="note">
            <h2>2. Confidentiality</h2>
            <p>All information provided through the RCAF system will be treated confidentially, guaranteeing the privacy and protection of user data.</p>
          </div>
          <div className="note">
            <h2>3. Formal Responses</h2>
            <p>Responses to RCAFs will be written in a formal and professional manner, respecting the principles of clarity, precision, and user-friendliness.</p>
          </div>
          <div className="note">
            <h2>4. Tracking Requests</h2>
            <p>The user will be able to track his/her request through the filing number that is automatically generated when registering an RCAF in the system.</p>
          </div>
        </div>
      </div>




    </div>
  );
}

export default RcafMainPage;

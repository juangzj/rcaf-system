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

      <div className="make-rcaf-container">
        <h1>Make a RCAf</h1>
        <div className="rcaf-card-request">
          <h2>Request</h2>
          <p>Formal request for information, services or specific actions that the user needs.</p>
          <button>Make a request</button>
        </div>
        <div className="rcaf-card-complaint">
          <h2>Complaint</h2>
          <p>Formal complaint regarding any issue or concern the user wishes to address.</p>
          <button>Make a complaint</button>
        </div>
        <div className="rcaf-card-claim">
          <h2>Claim</h2>
          <p>Claim related to a service, product, or issue that the user wants to report.</p>
          <button>Make a claim</button>
        </div>
        <div className="rcaf-card-suggestion">
          <h2>Suggestion</h2>
          <p>Suggestions for improvements or ideas the user wants to propose.</p>
          <button>Make a suggestion</button>
        </div>
        <div className="rcaf-card-congratulation">
          <h2>Congratulation</h2>
          <p>Congratulations on achievements, milestones, or positive events to celebrate.</p>
          <button>Send a congratulation</button>
        </div>
        <div className="rcaf-card-questions">
          <h2>Questions</h2>
          <p>Questions the user wants to ask or seek clarification about.</p>
          <button>Ask a question</button>
        </div>
      </div>

    </div>
  );
}
export default RcafMainPage;

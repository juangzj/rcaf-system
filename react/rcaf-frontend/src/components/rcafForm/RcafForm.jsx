import { useState } from 'react';
import axios from 'axios';
import './RcafForm.css';
import swal from 'sweetalert';

const createAnonymousRcafUri = 'http://localhost:8080/rcaf/createAnonymousRcaf';

const RcafForm = () => {
  // States for form fields
  const [type, setType] = useState('Request');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //Function to show the unique code generated 
  const showUniqueCodeGenerated = (uniqueCode) => {
    swal({
      title: "RCAF created successfully",
      text: `Your RCAF Unique Code is ${uniqueCode}, REMBER, you have to save this code to see RCAF status`
    })

  }


  // Function to handle form submission
  const handleSubmitRcaf = async (event) => {
    event.preventDefault(); // Prevent default form behavior

    try {

      // Make POST request to the API using axios
      const response = await axios.post(
        createAnonymousRcafUri,
        {
          type: type,
          description: description,
        }
      );

      if (response.status === 200 || response.status === 201) {
        showUniqueCodeGenerated(response.data.uniqueCode);

        // Handle successful response
        setSuccessMessage('Request submitted successfully!');
        setErrorMessage('');
        setType('Request'); // Reset type
        setDescription(''); // Clear description
      } else {
        // Handle non-successful response
        setErrorMessage('Failed to submit the request. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      // Handle any network or server errors
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
      console.error('Error details:', error.response?.data || error.message);  // Log the error for debugging
    }
  };

  return (
    <div className="form-container">
      <h2>Create Request</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmitRcaf}>
        {/* Request Type Field */}
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Request">Request</option>
            <option value="Complaint">Complaint</option>
            <option value="Claim">Claim</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Congratulations">Congratulations</option>
            <option value="Questions">Questions</option>
          </select>
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RcafForm;

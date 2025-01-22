import { useState } from "react";
import './RcafForm.css'

const RcafForm = () => {
  const [formData, setFormData] = useState({
    uniqueCode: "",
    type: "Request",
    description: "",
    status: "Open",
    isAnonymous: false,
  });

  // Handles input changes and updates the form state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic here to send form data to the backend
  };

  return (
    <div className="form-container">
      <h2>Create Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Unique Code Field */}
        <div className="form-group">
          <label htmlFor="uniqueCode">Unique Code</label>
          <input
            type="text"
            id="uniqueCode"
            name="uniqueCode"
            value={formData.uniqueCode}
            onChange={handleChange}
            required
          />
        </div>

        {/* Request Type Field */}
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="Request">Request</option>
            <option value="Complaint">Complaint</option>
            <option value="Claim">Claim</option>
            <option value="Suggestion">Suggestion</option>
          </select>
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Status Field */}
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Anonymous Checkbox */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleChange}
            />
            Submit as Anonymous
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RcafForm;

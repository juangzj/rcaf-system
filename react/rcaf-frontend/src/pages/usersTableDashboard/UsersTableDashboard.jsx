import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import EliminationConfirmationModal from '../../components/confirmationModal/EliminationConfirmationModal';
import './UserTableDashboard.css'

// API endpoints
const getAllUsersUri = 'http://localhost:8080/users/getAllUsers'; // URI to fetch all users
const deleteUserUri = 'http://localhost:8080/users/deleteUser';   // URI to delete a user

const UsersTableDashboard = () => {
  // State to store users data
  const [users, setUsers] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to store error messages
  const [error, setError] = useState(null);
  // State to control the visibility of the delete confirmation modal
  const [eliminationModalVisible, setEliminationModalVisible] = useState(false);
  // State to store the ID of the selected user for deletion
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Handle user delete button click
  const handleUserDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setEliminationModalVisible(true);
  };

  // Function to confirm user deletion
  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token not found');
      const headers = {
        Authorization: token,
      };
      await axios.delete(`${deleteUserUri}/${selectedUserId}`, { headers });
      // Update the users list after deletion
      setUsers(users.filter((user) => user.user_id !== selectedUserId));
      setEliminationModalVisible(false);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  // Function to close the deletion confirmation modal
  const handleCloseEliminationModal = () => {
    setEliminationModalVisible(false);
  };

  // Function to fetch all users from the backend
  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (!token) throw new Error('Token not found'); // Check if token exists

      const headers = {
        Authorization: token,
      };

      const res = await axios.get(getAllUsersUri, { headers });
      setUsers(res.data); // Set the fetched users to state
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch users');
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all users on component mount
  useEffect(() => {
    getAllUsers();
  }, []);

  // Render a loading message while fetching data
  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="table-responsive">
        <h1 className="text-center">Users Table</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-light">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Registration Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.user_type}</td>
                  <td>{user.registration_date || '-'}</td>
                  <td>
                    <button
                      onClick={() => handleUserDeleteClick(user.user_id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <EliminationConfirmationModal
        eliminationShow={eliminationModalVisible}
        eliminationOnClose={handleCloseEliminationModal}
        eliminationOnConfirm={handleConfirmDelete}
        eliminationMessage="Are you sure you want to delete this user?"
      />
    </div>
  );
};

export default UsersTableDashboard;

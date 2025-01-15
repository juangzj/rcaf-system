import 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function UsersTableDashboard() {

  const users = [
    {
      user_id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'hashedpassword123',
      user_type: 'admin',
      registration_date: '2024-01-10 14:30:00',
    },
    {
      user_id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'hashedpassword456',
      user_type: 'registered',
      registration_date: '2024-02-15 09:15:00',
    },
    {
      user_id: 3,
      name: 'Michael Johnson',
      email: 'michaelj@example.com',
      password: 'hashedpassword789',
      user_type: 'anonymous',
      registration_date: '2024-03-01 17:00:00',
    },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="table-responsive">
        <h1 className="text-center">Users Table</h1>
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
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.user_type}</td>
                <td>{new Date(user.registration_date).toLocaleString()}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTableDashboard;

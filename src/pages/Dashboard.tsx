import React, { Component } from 'react';
import rolesData from '../roles.json';
// import './Dashboard.css';
import { withRouter } from './withRouter';
// import { Roles } from '../types';
 
interface User {
  name: string;
  role: string;
}
 
interface DashboardProps {
  location: any;
}
 
interface DashboardState {
  users: User[];
  newUser: string;
  selectedRole: string;
}
 
class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      users: [],
      newUser: '',
      selectedRole: 'admin',
    };
  }
 
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newUser: event.target.value });
  };
 
  handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedRole: event.target.value });
  };
 
  handleAddUser = () => {
    const { newUser, selectedRole } = this.state;
    console.log(newUser,"newUser");
    
    if (newUser.trim() !== '') {
      this.setState((prevState) => ({
        users: [...prevState.users, { name: newUser, role: selectedRole }],
        newUser: '',
      }));
    }
  };
 
  render() {
    const { users, newUser } = this.state;
 
    return (
      <div className="dashboard-container">
        <h1>Welcome to the Dashboard</h1>
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Enter user name"
            value={newUser}
            onChange={this.handleInputChange}
          />
          <select onChange={this.handleRoleChange}>
            {Object.keys(rolesData).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <button onClick={this.handleAddUser}>Add User</button>
        </div>
        <div className="roles-matrix">
          <h2>Roles and Permissions</h2>
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Permissions</th>
                <th>Users</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rolesData).map(([role, permissions]) => (
                <tr key={role}>
                  <td>{role}</td>
                  <td>{permissions.join(', ')}</td>
                  <td>
                    {users
                      .filter((user) => user.role === role)
                      .map((user, index) => (
                        <div key={index}>{user.name}</div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
 
export default withRouter(Dashboard);
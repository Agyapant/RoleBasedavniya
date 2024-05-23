import React from 'react'
import {  useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
 
const Home = () => {
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(users,"uusses")
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
      
      
      
      <Dashboard/>
    </div>
  );
}

export default Home


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface User {
//   id: number;
//   name: string;
//   roles: { [key: string]: boolean };
// }

// const roles = ['Admin', 'Manager', 'Team Member', 'Client'];

// const initializeUserRoles = (): { [key: string]: boolean } => {
//   const initialRoles: { [key: string]: boolean } = {};
//   roles.forEach(role => {
//     initialRoles[role] = false;
//   });
//   return initialRoles;
// };

// const Home: React.FC = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users') || '[]').map((user: User) => ({
//       ...user,
//       roles: user.roles || initializeUserRoles(),
//     }));
//     setUsers(storedUsers);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('loggedInUser');
//     navigate('/login');
//   };

//   const handleCheckboxChange = (userId: number, role: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     const updatedUsers = users.map(user => {
//       if (user.id === userId) {
//         return {
//           ...user,
//           roles: {
//             ...user.roles,
//             [role]: event.target.checked,
//           },
//         };
//       }
//       return user;
//     });

//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   return (
//     <div>
//       <h2>Welcome to Home Page</h2>
//       <button onClick={handleLogout}>Logout</button>

//       <table>
//         <thead>
//           <tr>
//             <th>User</th>
//             {roles.map(role => (
//               <th key={role}>{role}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               {roles.map(role => (
//                 <td key={role}>
//                   <input
//                     type="checkbox"
//                     checked={user.roles[role] || false}
//                     onChange={handleCheckboxChange(user.id, role)}
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Home;




{/* <UserTable users={[]} togglePermission={function (userId: number, permission: Permission): void {
        throw new Error('Function not implemented.');
      } } userPermissions={{}} currentUser={users} /> */}
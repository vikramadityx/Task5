import React, { useState, useEffect } from 'react';
import './App.css';

const apiUrl = "https://dummyjson.com/users";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchAndDisplayUserData();
  }, []);

  const fetchAndDisplayUserData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (Array.isArray(data.users)) {
        setUserData(data.users);
      } else {
        console.error("No user data found in the API response");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Dummy Data</h1>
      <table id="user-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Domain</th>
            <th scope="col">IP Address</th>
            <th scope="col">University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt="User Image" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

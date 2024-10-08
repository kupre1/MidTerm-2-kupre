import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setUsers(response.data.results);
      } catch (error) {}
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index} style={styles.card}>
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              style={styles.image}
            />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.email}</p>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Call your API to fetch user info and update the 'user' state
    // You need to implement this part using axios or fetch
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default UserInfo;

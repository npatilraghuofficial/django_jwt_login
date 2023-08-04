import React, { useState, useEffect } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          {/* */}
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default UserInfo;

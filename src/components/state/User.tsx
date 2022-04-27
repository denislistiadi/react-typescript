import React, { useState } from "react";

type AuthUserProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUserProps | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Denis",
      email: "denislistiadi@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;

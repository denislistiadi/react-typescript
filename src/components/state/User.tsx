import React, { useState } from "react";

type AuthUserProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps);
  const handleLogin = () => {
    setUser({
      name: "Denis",
      email: "denislistiadi@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email} </div>
    </div>
  );
};

export default User;

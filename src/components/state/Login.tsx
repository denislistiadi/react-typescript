import React from "react";

type Props = {};

const Login = (props: Props) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogin ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default Login;

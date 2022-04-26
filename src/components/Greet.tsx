import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <h2>
      {props.isLogin
        ? `Welcome ${props.name}! you have ${messageCount} unread messages`
        : `Hello Guest!`}
    </h2>
  );
};

export default Greet;

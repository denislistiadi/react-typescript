import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <h2>
      {props.isLogin
        ? `Welcome {props.name}! you have {props.messageCount} unread messages`
        : `Hello Guest!`}
    </h2>
  );
};

export default Greet;

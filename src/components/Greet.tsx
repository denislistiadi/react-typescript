import React from 'react'

type GreetProps = {
    name: string;
}

const Greet = (props: GreetProps) => {
  return (
    <h2>Welcome {props.name}! you have 10 unread messages</h2>
  )
}

export default Greet
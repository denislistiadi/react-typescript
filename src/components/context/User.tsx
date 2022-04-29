import React from 'react'
import { UserContext } from './UserContext';

const User = () => {
    const userContext = React.useContext(UserContext);
    const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Denis',
                email: 'denis@example.com'
            })
        }
    }

    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null);
        }
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>
    </div>
  )
}

export default User
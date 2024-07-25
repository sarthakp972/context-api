 import React, { useContext, useState } from 'react';
 import UserContext from '../context/UserContext';

const Login = () => {
   const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const { user,setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
     setUser({ username, password });
  };

  return (
    <div>
  
    <h2>Login</h2>
       <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        name="login"
      />
        <input
        type="password" // Changed from type="text" to type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         name="profile"
      /> 
       <button className='btn' onClick={handleSubmit}>Submit</button> 
    </div> 
  );
};

export default Login;

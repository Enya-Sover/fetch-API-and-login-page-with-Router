import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const { setRegistredUser, registredUser} = useContext(LoginContext);

  const [newUserName, setNewUserName] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()
  const registerNewUser = ()=>{
    let newUser = {
        username: newUserName,
        password: newPassword
    }
    newUser = [...registredUser, newUser]
    setRegistredUser(newUser)
    navigate('/')
  }

  return (
    <>
    <header>
      <h1>Welcome to the register page.</h1>
      <h2>Input your username and password to register</h2>
      </header>
      <main className="registerMain">
      <input type="text" placeholder="Username" onChange={(e)=> setNewUserName(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=> setNewPassword(e.target.value)} />
      <button onClick={registerNewUser}>Register new user</button>
      </main>
      <Link to='/'>Go back på home page</Link>
    </>
  );
};

export default RegisterUser;

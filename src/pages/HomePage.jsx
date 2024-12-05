import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext,  } from "react";
import { LoginContext } from "../context/LoginContext";

const HomePage = () => {
  const { registredUser } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {id} = useParams()
  console.log(registredUser)
  let checkRegisteredUser = () => {
    const user = registredUser.find(user =>user.username === username && user.password === password)
     if (user){
        navigate(`/login/${user.username}`);
     } else{
        setError("Either username or password is incorrect");
    }
    
  };

  return (
    <>
      <Link to="/">
        <h1>Homepage</h1>
      </Link>
      <input type="text" placeholder="Enter username" onChange={(e)=> setUsername(e.target.value)}/>
      <input type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={checkRegisteredUser} type="Submit">
        Log in
      </button>
      {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      <br />
      <p>Not a user yet?</p>
      <Link to='/register'>Click here to register new user</Link>
    </>
  );
};

export default HomePage;

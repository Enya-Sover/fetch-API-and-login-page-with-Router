import { useParams } from "react-router-dom";
import AddUserButton from "../components/AddUserButton";
import UserList from "../components/Userlist";
import { Link } from "react-router-dom";

const LoggedInPage = () => {
  const {id} = useParams()

  const capitalizeFirstLetter = (user)=>{
    return user.charAt(0).toUpperCase() + user.slice(1)
  }
  
  return (
    <>
    <header>
    <h1>Welcome {capitalizeFirstLetter(id)}</h1>
    </header>
<main>
      <AddUserButton />
      <UserList />
    </main>
      <Link to='/'>Log out</Link>
    </>
  );
};

export default LoggedInPage;

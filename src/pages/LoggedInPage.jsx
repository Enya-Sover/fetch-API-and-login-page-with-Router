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
    <h1>Welcome {capitalizeFirstLetter(id)}</h1>
      <AddUserButton />
      <UserList />
      <Link to='/'>Log out</Link>
    </>
  );
};

export default LoggedInPage;

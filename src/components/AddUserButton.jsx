import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddUserButton = () => {
  const { fetchUser } = useContext(UserContext);

  return (
    <>
      <button onClick={()=> window.location.reload()}>Remove user</button>
      <button onClick={fetchUser}>Fetch new user</button>
      <br /> <br />
    </>
  );
};

export default AddUserButton;

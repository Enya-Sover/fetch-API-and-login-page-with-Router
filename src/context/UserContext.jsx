import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {

  let [user, setUser] = useState(null);
  
    let fetchUser = async () => {
      let response = await fetch("https://randomuser.me/api");
      let data = await response.json();
      setUser(data.results);
    };
  return (
    <>
      <UserContext.Provider value={{user, fetchUser}}>{children}</UserContext.Provider>
    </>
  );
}

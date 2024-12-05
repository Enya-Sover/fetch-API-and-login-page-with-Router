import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const UserList = ()=>{
    const {user} = useContext(UserContext)

    return(<>   
    {user ? user.map(user=>{
        return(
        <div className="allInfo" key={user.name.first}>
            <div className="userInfo">
        <p>{`Name: ${user.name.first} ${user.name.last}`}</p>
        <p>{`Country: ${user.location.country}`}</p>
        <p>{`City: ${user.location.city}`}</p>
        <p>{`Email: ${user.email}`}</p>
        </div>
            <img src={`${user.picture.large}`} alt={`Picture of ${user.name.first}`} />
        </div>)
    }) : <p>No user fetched yet</p>}</>)
}

export default UserList
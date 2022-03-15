import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext";


export const ShowData=()=>{
    let {userData, isAuth}=useContext(authContext); ////which start from use called hooks in react functions

    return (
        isAuth ? <h1>Logged In {userData.token}</h1> : <h1>Logged Out</h1>
    )
}
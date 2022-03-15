import { useContext} from "react";
import { authContext } from "../Contexts/AuthContext";

export const Navbar=()=>{
    let {isAuth, handleChange, handleAuth}=useContext(authContext);

    return (
        <div>
        <input type="text" name="email" 
        placeholder="Enter email"
        onChange={(e)=>{
            handleChange(e)
        }} />
        <input type="text" name="password" 
        placeholder="Enter password"
        onChange={(e)=>{
            handleChange(e)
         }} />
        <button onClick={handleAuth}>{isAuth? "Logout" : "Login"}</button>

        </div>
    )
}
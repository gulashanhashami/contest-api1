import { useState, createContext } from "react";
import axios from "axios";

export const authContext= createContext(); //use to make a box

export const AuthContextProvider=({children})=>{
  const [isAuth, setAuth]= useState(false);
  const [data, setData]= useState({});
  const [userData, setUserData] = useState({});
  
   const handleChange=(e)=>{
      let {name, value}=e.target;
      let userData1= {...data, [name]:value};
      setData(userData1);
  }

  const handleAuth=()=>{
      axios.post("https://reqres.in/api/users", data).then((res)=>{  // used reqres api
          if(res){
              setUserData(data);
              setAuth(!isAuth);
          }
      })
  }
  return (
      <authContext.Provider value={{isAuth, handleAuth, handleChange, userData}}>
      {children}
      </authContext.Provider>
  )


}
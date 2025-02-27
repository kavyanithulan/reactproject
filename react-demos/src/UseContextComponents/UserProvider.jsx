/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({children}) => {
   const [user,setUser] = useState({name:'kavya'});

   const updateUser=(newValue)=>{
    setUser({name:newValue});
   };
  return (
    <div>
        <UserContext.Provider value={{user,updateUser}}>
          {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider;
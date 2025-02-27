import { useContext, useState } from "react"
import { UserContext } from "./UserProvider";

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const[uname,setuname]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateUser(uname);
        setuname('');
    }
  return (
    <div>UpdateUser: 
        <form onSubmit={handleSubmit}>
            <input type="text" value={uname} onChange={(e)=>setuname(e.target.value)}></input>
            <button type="submit">update</button>
        </form>
    </div>
  )
}

export default UpdateUser
import { useState } from "react"

const Profile = () => {
    const[userProfile,setUserProfile] = useState({pName:"",page:0});
    const[name,setName]=useState("");
    const[age,setAge]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUserProfile({...userProfile,pName:name,page:age});
    }
  return (
    <div>Profile Details: 
        <form onSubmit={handleSubmit}>
        <h3>Enter Name: </h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <h3>Enter Age: </h3>
        <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
        <button type="submit">Update</button>
        </form>
        <div>
            <h1>Profile Details: </h1>
            <h4>Name: {userProfile.pName}</h4>
            <h4>Age: {userProfile.page}</h4>
        </div>
    </div>
  )
}

export default Profile
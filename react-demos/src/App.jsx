import UpdateUser from "./UseContextComponents/UpdateUser";
import UserProfile from "./UseContextComponents/UserProfile";
import UserProvider from "./UseContextComponents/UserProvider";

const App =()=>{
 
    return <div>
  <UserProvider>
    <UserProfile/>
    <UpdateUser/>
  </UserProvider>


    </div>
}

export default App;
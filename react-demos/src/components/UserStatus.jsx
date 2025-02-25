const UserStatus =(props)=>{
   
if(props.loggedIn && props.isAdmin)
{
   return <h2>Welcome Admin</h2>
}
else (props.loggedIn)
return <h2>Welcome user</h2>


};

export default UserStatus;
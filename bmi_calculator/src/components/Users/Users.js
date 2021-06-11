import User from "./User/User";
import classes from "./Users.module.css";

function Users({ users }) {
  return (
    <div className={classes.users}>
      
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </div>
  );
}

export default Users;

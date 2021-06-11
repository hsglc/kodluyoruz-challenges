import classes from "./User.module.css";

function User({ user }) {
  return (
    
      <div className={classes.user_container}>
        <p> Name : {user.name.toUpperCase()}</p>
        <p> Bmi : {user.bmi}</p>
      </div>
      
    
  );
}

export default User;

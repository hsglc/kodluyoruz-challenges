import classes from "./Result.module.css";
import { useHistory } from "react-router-dom";
import FormButton from "../Buttons/FormButton";
import { useState, useEffect } from "react";
import Users from "../Users/Users";

function Result({ height, weight, name }) {
  const bmi = (weight / (((height / 100) * height) / 100)).toFixed(1);

  const [showUsers, setShowUsers] = useState(false);

  const [users, setUsers] = useState([{ name: "ADMIN", bmi: 0 }]);

  const [showResult, setShowResult] = useState(true);

  const history = useHistory();

  const addtoStorageHandler = () => {
    try {
      const fetchedUsers = JSON.parse(localStorage.getItem("users"));
      fetchedUsers.push({ name, bmi });
      setUsers(fetchedUsers);
      localStorage.setItem("users", JSON.stringify(fetchedUsers));
    } catch (error) {
      prompt(error);
    }

    setShowUsers(true);
    setShowResult(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    const fetchedUsers = JSON.parse(localStorage.getItem("users") || []);
    setUsers(fetchedUsers);
  }, []);

  const changeLocationHandler = () => {
    history.push("/what's-bmi");
  };

  return (
    <>
      {showResult && (
        <div className={classes.result}>
          <div>
            <p>For the information you entered:</p>
            <p>Height: {height} centimeters</p>
            <p>Weight: {weight} kilograms</p>
            <p>
              Your BMI is <span className={classes.bmi}>{bmi}</span>
            </p>
          </div>
          <div>
            <table className={classes.table}>
              <tr>
                <th>BMI</th>
                <th>Weight Status</th>
              </tr>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5—24.9</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>25.0—29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 and Above</td>
                <td>Obese</td>
              </tr>
            </table>
          </div>
          <div className={classes.buttons}>
            <FormButton
              actionHandler={addtoStorageHandler}
              name="Add to Local Storage"
            />
            <FormButton
              actionHandler={changeLocationHandler}
              name={"What's BMI?"}
            />
          </div>
        </div>
      )}

      {showUsers && <Users users={users} />}
    </>
  );
}

export default Result;

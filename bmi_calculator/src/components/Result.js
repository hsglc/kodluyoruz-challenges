import classes from "./Result.module.css";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Result({ height, weight }) {
  const Button = styled.button`
    font-size: 0.8em;
    margin: 3rem;
    padding: 0.4em 1em;
    border-radius: 7px;
  `;

  const bmi = (weight / (((height / 100) * height) / 100)).toFixed(1);
  const history = useHistory();
  const addtoStorageHandler = () => {
    localStorage.setItem("bmi", bmi);
  };

  const changeLocationHandler = () => {
    history.push("/bmi");
  };

  return (
    <div className={classes.result}>
      <div>
        <p>For the information you entered:</p>
        <p>Height: {height} centimeters</p>
        <p>Weight: {weight} kilograms</p>
        <p>Your BMI is <span className={classes.bmi} >{bmi}</span></p>
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
        <Button onClick={addtoStorageHandler}>Add to Local Storage</Button>
        <Button onClick={changeLocationHandler}>What's BMI?</Button>
      </div>
    </div>
  );
}

export default Result;

import { useRef, useState } from "react";
import Result from "../../pages/Result/Result";
import classes from "./Form.module.css";
import FormButton from "../Buttons/FormButton";

function Form() {
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const [showResult, setShowResult] = useState(false);
  const [showBmi, setShowBmi] = useState(true);

  const calculateHandler = (e) => {
    e.preventDefault();

    setShowResult(true);
    setShowBmi(false);
  };
  return (
    <>
      {showBmi && (
        <div className={classes.form}>
          <h1>Adult BMI Calculator</h1>
          <form>
            <label>
              HEIGHT
              <input
                ref={heightInputRef}
                type="number"
                placeholder="with centimeters"
              />
            </label>
            <label>
              WEIGHT
              <input
                ref={weightInputRef}
                type="number"
                placeholder="with kilograms"
              />
            </label>
            <FormButton onClick={calculateHandler} name="Calculate">
              Compute BMI
            </FormButton>
          </form>
        </div>
      )}
      {showResult && (
        <Result
          height={heightInputRef.current.value}
          weight={weightInputRef.current.value}
        />
      )}
    </>
  );
}

export default Form;

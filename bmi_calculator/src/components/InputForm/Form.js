import { useRef, useState } from "react";
import Result from "../Result/Result";
import classes from "./Form.module.css";
import FormButton from "../Buttons/FormButton";

function Form() {
  const weightInputRef = useRef();
  const heightInputRef = useRef();
  const nameInputRef = useRef();

  const [showResult, setShowResult] = useState(false);
  const [showCalculator, setShowCalculator] = useState(true);

  const calculateHandler = (e) => {
    e.preventDefault();
    
    setShowResult(true);
    setShowCalculator(false);
  };

  return (
    <>
      {showCalculator && (
        <div className={classes.form}>
          <h1>Adult BMI Calculator</h1>
          <form onSubmit={calculateHandler}>
            <label>
              Name
              <input ref={nameInputRef} type="text" placeholder="your name" />
            </label>
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
            <FormButton name="Calculate">Compute BMI</FormButton>
          </form>
        </div>
      )}
      {showResult && (
        <Result
          height={heightInputRef.current.value}
          weight={weightInputRef.current.value}
          name={nameInputRef.current.value}
        />
      )}
    </>
  );
}

export default Form;

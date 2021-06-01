import { useRef, useState } from "react";
import Result from "./Result";
import classes from "./Form.module.css";

import styled from "styled-components";

function Home() {
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const [showResult, setShowResult] = useState(false);
  const [showBmi, setShowBmi] = useState(true);

  const Button = styled.button`
    font-size: 1em;
    margin: 3rem;
    padding: 0.25em 1em;
    border-radius: 7px;

    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
  `;

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
            <label htmlFor="height">
              HEIGHT
              <input
                ref={heightInputRef}
                name="height"
                type="text"
                placeholder="with centimeters"
              ></input>
            </label>
            <label htmlFor="weight">
              WEIGHT
              <input
                ref={weightInputRef}
                name="weight"
                type="text"
                placeholder="with kilograms"
              ></input>
            </label>
            <Button onClick={calculateHandler}>Compute BMI</Button>
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

export default Home;

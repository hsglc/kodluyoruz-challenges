import { useHistory } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const weightInputRef = useRef();
  const heightInputRef = useRef();
  const history = useHistory();

  const calculateHandler = (e) => {
    e.preventDefault();
    history.push("/result");
  };
  return (
    <div>
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
        <button onClick={calculateHandler}>Compute BMI</button>
      </form>
    </div>
  );
}

export default Home;

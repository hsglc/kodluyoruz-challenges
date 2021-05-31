import { Link } from "react-router-dom";

function Bmi() {
  return (
    <div>
      <h2>What is the body mass index (BMI)?</h2>
      <p>
        The body mass index (BMI) is a measure that uses your height and weight
        to work out if your weight is healthy.
      </p>
      <p>
        The BMI calculation divides an adult's weight in kilograms by their
        height in metres squared. For example, A BMI of 25 means 25kg/m2.
      </p>
      <h3>BMI ranges</h3>
      <p>For most adults, an ideal BMI is in the 18.5 to 24.9 range.</p>
      <p>
        For children and young people aged 2 to 18, the BMI calculation takes
        into account age and gender as well as height and weight.
      </p>
      <p>If your BMI is:</p>
      <ul>
        <li>below 18.5 – you're in the underweight range</li>
        <li>between 18.5 and 24.9 – you're in the healthy weight range</li>
        <li>between 25 and 29.9 – you're in the overweight range</li>
        <li>between 30 and 39.9 – you're in the obese range</li>
        <li>
          <Link to="/" >
            If you want to calculate your BMI, try our healthy weight
            calculator.
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Bmi;

const DUMMY_DIET_LIST = [
  {
    underweight:
      "Eating at least 5 portions of a variety of fruit and vegetables every day.",

    normal:
      "eat at least 5 portions of a variety of fruit and vegetables every day (see 5 A Day)",

    overweight:
      "Whole grains (whole wheat, steel cut oats, brown rice, quinoa)",

    obese:
      "plenty of potatoes, bread, rice, pasta and other starchy foods (ideally you should choose wholegrain varieties)",
  },
];

function DietList({ bmi }) {
  const dietList = DUMMY_DIET_LIST[0];
  let diet;

  let type;

  if (bmi < 18.5) {
    type = "underweight";
    diet = dietList.underweight;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    type = "normal";
    diet = dietList.normal;
  } else if (bmi > 25.0 && bmi <= 29.9) {
    type = "overweight";
    diet = dietList.overweight;
  } else if(bmi >= 30.0) {
    type = "obese";
    diet = dietList.obese;
  }else {
    diet = "please type a valid information";
    type = "Nothing"
  }

  return (
    <>
      <h3>You are: {type.toUpperCase()}</h3>
      <ul>
        <li>{diet}</li>
      </ul>
    </>
  );
}

export default DietList;

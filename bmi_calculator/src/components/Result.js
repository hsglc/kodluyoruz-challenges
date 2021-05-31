import { useHistory } from "react-router-dom";

function Result() {
  const history = useHistory();

  return (
    <div>
      <p></p>
      <button onClick={() => history.push("/")}>Calculate Again</button>
    </div>
  );
}

export default Result;

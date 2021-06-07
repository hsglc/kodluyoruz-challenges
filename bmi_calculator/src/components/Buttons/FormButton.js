import styled from "styled-components";

function FormButton({ name, actionHandler }) {
  const Button = styled.button`
    font-size: 0.8em;
    margin: 3rem;
    padding: 0.3em 1em;
    border-radius: 7px;
    cursor: pointer;
    border: none;
    &:hover {
      background: black;
      color: white;
    }
  `;

  return <Button onClick={actionHandler}>{name}</Button>;
}

export default FormButton;

import styled from "styled-components";

function FormButton({name}) {
  const Button = styled.button`
    font-size: 1em;
    margin: 3rem;
    padding: 0.25em 1em;
    border-radius: 7px;
    cursor: pointer;
    border: none;
    
  `;

  return <Button >{name}</Button>;
}

export default FormButton;

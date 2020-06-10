import styled from "styled-components";

const DeleteButton = styled.button`
  color: black;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: transparent;
  margin: 5px;
  justify-content: space-around;
  font-size: 16px;
  transition: border 0.5s, background-color 0.5s, color 0.5s;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
    background-color: ${(props) => props.theme.scarlet};
    color: white;
  }
`;

export default DeleteButton;

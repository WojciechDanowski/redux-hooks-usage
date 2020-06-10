import styled from "styled-components";

const AddingButton = styled.button`
  apperance: none;
  color: black;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.harlequin};
  padding: 5px;
  width: 60px;
  margin: 10px;
  justify-content: space-around;
  transition: border 0.5s, background-color 0.5s, color 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.harlequin};
    border: 2 px solid white;
    color: white;
  }
`;

export default AddingButton;

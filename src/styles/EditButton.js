import styled from "styled-components";

const EditButton = styled.button`
  margin: 5px;
  padding: 5px;
  border: 2px solid ${(props) => props.theme.selectiveYellow};
  background-color: transparent;
  color: black;
  transition: color 0.5s, border 0.5s, background-color 0.5s;

  &:hover {
    cursor: pointer;
    color: white;
    border: 2px solid white;
    background-color: ${(props) => props.theme.selectiveYellow};
  }
`;

export default EditButton;

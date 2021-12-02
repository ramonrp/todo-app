import { QUERIES } from "../constants";
import styled from "styled-components";

const Input = (props) => {
  const { addElement } = props;

  return (
    <InputWrapper onSubmit={(e) => addElement(e)}>
      <Label htmlFor="textInput">
        <CheckInput></CheckInput>
        <TodoInput
          id="textInput"
          placeholder="Create a new todo..."
        ></TodoInput>
      </Label>
    </InputWrapper>
  );
};

const CheckInput = styled.div`
  border: 1px solid;
  border-color: var(--completed-text);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const Label = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px 20px;
  width: 100%;
  height: 100%;
  @media ${QUERIES.tabletAndUp} {
    padding: 20px 24px;
  }
`;
const InputWrapper = styled.form`
  background-color: var(--background-task);
  border-radius: 8px;
  &:focus-within {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 1px;
  }
`;

const TodoInput = styled.input`
  border: none;
  background-color: transparent;
  width: auto;
  color: var(--task-text);
  &:focus-visible {
    outline: none;
  }
`;

export { Input };

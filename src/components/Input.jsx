import { QUERIES } from "../constants";
import styled from "styled-components";
import { useThemeContext } from "../context";

const Input = (props) => {
  const { addElement } = props;
  const { theme } = useThemeContext();
  const bgColor =
    theme === "light" ? "white" : "var(--very-dark-desaturated-blue)";
  const textColor =
    theme === "light"
      ? "var(--very-dark-grayish-blue)"
      : "var(--light-grayish-blue)";
  const borderColor =
    theme === "light"
      ? "var(--light-grayish-blue)"
      : "var(--very-dark-grayish-blue)";
  return (
    <InputWrapper bgColor={bgColor} onSubmit={(e) => addElement(e)}>
      <Label htmlFor="textInput">
        <CheckInput borderColor={borderColor}></CheckInput>
        <TodoInput
          textColor={textColor}
          id="textInput"
          placeholder="Create a new todo..."
        ></TodoInput>
      </Label>
    </InputWrapper>
  );
};

const CheckInput = styled.div`
  border: 1px solid;
  border-color: ${(p) => p.borderColor};
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
  background-color: ${(p) => p.bgColor};

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
  color: ${(p) => p.textColor};
  &:focus-visible {
    outline: none;
  }
`;

export { Input };

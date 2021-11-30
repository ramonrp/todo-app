import styled from "styled-components";

const Input = (props) => {
  const { addElement } = props;

  return (
    <InputWrapper onSubmit={(e) => addElement(e)}>
      <CheckInput></CheckInput>
      <TodoInput id="textInput" placeholder="Create a new todo..."></TodoInput>
    </InputWrapper>
  );
};

const CheckInput = styled.div`
  border: 1px solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InputWrapper = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: white;
  padding: 20px 14px;
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
  &:focus-visible {
    outline: none;
  }
`;

export { Input };

import styled from "styled-components";
import CheckIcon from "./CheckIcon";

const MyCheckBox = (props) => {
  const { checked, onChange } = props;
  return (
    <Wrapper>
      <Background checked={checked}>
        <OriginalInput
          onChange={onChange}
          checked={checked}
          type="checkbox"
        ></OriginalInput>
        {checked && (
          <CheckMark>
            <CheckIcon />
          </CheckMark>
        )}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  border-radius: 50%;
  background: var(--completed-text);
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    background: var(--linear-gradient);
  }
`;

const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(p) =>
    p.checked ? "var(--linear-gradient)" : "var(--background-task)"};
`;

const OriginalInput = styled.input`
  opacity: 0;
`;

const CheckMark = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 2px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

export { MyCheckBox };

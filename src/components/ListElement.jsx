import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CrossIcon from "./CrossIcon";
import { QUERIES } from "../constants";
import VisuallyHidden from "./VisuallyHidden";
import { useThemeContext } from "../context";
import { MyCheckBox } from "./MyCheckBox";

const ListElement = (props) => {
  const { task, completed, id, taskToggler, removeElement, index } = props;
  const { theme } = useThemeContext();
  const bgColor =
    theme === "light" ? "white" : "var(--very-dark-desaturated-blue)";
  const colorText =
    theme === "light"
      ? "var(--very-dark-grayish-blue)"
      : "var(--light-grayish-blue)";
  const colorTextDone =
    theme === "light"
      ? "var(--light-grayish-blue)"
      : "var(--very-dark-grayish-blue)";
  const borderColor =
    theme === "light"
      ? "var(--light-grayish-blue)"
      : "var(--very-dark-grayish-blue)";
  const borderGradient = theme === "dark" && "var(--background-check)";
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          bgColor={bgColor}
          borderColor={borderColor}
        >
          <MyCheckBox
            checked={completed}
            onChange={(e) => taskToggler(e, id)}
          />
          <TaskText
            style={{
              "--text-style": `${completed && "line-through"}`,
              "--color": `${
                completed ? "var(--completed-text)" : "var(--task-text)"
              }`,
            }}
          >
            {task}
          </TaskText>
          <Button onClick={() => removeElement(id)}>
            <IconWrapper>
              <CrossIcon />
            </IconWrapper>
            <VisuallyHidden>Remove task</VisuallyHidden>
          </Button>
        </Wrapper>
      )}
    </Draggable>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: var(--background-task);
  padding: 14px 20px;
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--completed-text);
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 20px 24px;
    gap: 24px;
  }
`;

const TaskText = styled.p`
  text-decoration: var(--text-style);
  color: var(--task-text);
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;
  width: 24px;
`;

const IconWrapper = styled.div`
  width: 12px;
  @media ${QUERIES.tabletAndUp} {
    width: 18px;
  }
`;

export { ListElement };

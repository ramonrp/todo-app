import styled from "styled-components";

const ListElement = (props) => {
  const { task, completed, id, taskToggler, removeElement } = props;
  return (
    <Wrapper>
      <input
        checked={completed}
        onChange={(e) => taskToggler(e, id)}
        type="checkbox"
      ></input>
      <TaskText style={{ "--text-style": `${completed && "line-through"}` }}>
        {task}
      </TaskText>
      <button onClick={() => removeElement(id)}>Remove</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: white;
  padding: 20px 14px;
  border-radius: 8px;
`;

const TaskText = styled.p`
  text-decoration: var(--text-style);
`;

export { ListElement };

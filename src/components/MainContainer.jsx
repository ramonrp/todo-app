import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Input } from "./Input";
import { FilterList } from "./FilterList";
import { ListWrapper } from "./ListWrapper";
import { QUERIES } from "../constants";
import { useLocalStorageState } from "../hooks";

const MainContainer = () => {
  const [list, setList] = useLocalStorageState("tasks", []);
  const [filter, setFilter] = React.useState("non filter");

  function addElement(e) {
    e.preventDefault();
    const task = e.target.elements.textInput.value;
    if (task === "") return;
    e.target.elements.textInput.value = "";
    const newList = [...list, { id: uuidv4(), task, completed: false }];
    setList(newList);
  }

  function removeElement(id) {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  }

  function taskToggler(e, id) {
    const completed = e.target.checked;
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, completed };
      }
      return task;
    });
    setList(newList);
  }

  function removeFinishTask() {
    const newList = list.filter((task) => !task.completed);
    setList(newList);
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const newList = list;
    const [removed] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, removed);
    setList(newList);
  };

  return (
    <Wrapper>
      <Input addElement={addElement}></Input>
      <Spacer />
      <ListWrapper
        list={list}
        taskToggler={taskToggler}
        filter={filter}
        removeElement={removeElement}
        onDragEnd={onDragEnd}
        removeFinishTask={removeFinishTask}
        setFilter={setFilter}
      />
      <Spacer />
      <FilterListWrapper>
        <FilterList setFilter={setFilter} filter={filter} />
      </FilterListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 12px;
  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 18}rem;
  }
`;
const Spacer = styled.div`
  margin-bottom: 16px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 24px;
  }
`;

const FilterListWrapper = styled.div`
  display: initial;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

export { MainContainer };

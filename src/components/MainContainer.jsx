import * as React from "react";
import { Input } from "./Input";
import { FilterList } from "./FilterList";
import { ListWrapper } from "./ListWrapper";

const MainContainer = () => {
  const [list, setList] = React.useState([]);
  const [filter, setFilter] = React.useState("non filter");

  function addElement(e) {
    e.preventDefault();
    const task = e.target.elements.textInput.value;
    e.target.elements.textInput.value = "";
    const newList = [...list, { id: Math.random(), task, completed: false }];
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

  return (
    <>
      <Input addElement={addElement}></Input>
      <ListWrapper
        list={list}
        taskToggler={taskToggler}
        filter={filter}
        removeElement={removeElement}
      />
      <FilterList setFilter={setFilter} />
    </>
  );
};

export { MainContainer };

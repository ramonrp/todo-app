import { ListElement } from "./ListElement";

const ListWrapper = (props) => {
  const { list, taskToggler, filter, removeElement } = props;

  const filteredList =
    filter === "non filter"
      ? list
      : list.filter((task) => task.completed === filter);

  return (
    <div>
      {filteredList.map((item) => (
        <ListElement
          key={item.id}
          task={item.task}
          completed={item.completed}
          taskToggler={taskToggler}
          id={item.id}
          removeElement={removeElement}
        />
      ))}
    </div>
  );
};

export { ListWrapper };

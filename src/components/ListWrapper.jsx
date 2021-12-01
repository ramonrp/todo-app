import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListElement } from "./ListElement";
import { TaskLeft } from "./TaskLeft";
const ListWrapper = (props) => {
  const {
    list,
    taskToggler,
    filter,
    removeElement,
    onDragEnd,
    removeFinishTask,
    setFilter,
  } = props;

  const filteredList =
    filter === "non filter"
      ? list
      : list.filter((task) => task.completed === filter);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1">
          {(provided) => (
            <DroppableList ref={provided.innerRef} {...provided.droppableProps}>
              {filteredList?.map((item, index) => (
                <ListElement
                  key={item.id}
                  task={item.task}
                  completed={item.completed}
                  taskToggler={taskToggler}
                  id={item.id}
                  index={index}
                  removeElement={removeElement}
                />
              ))}
              {provided.placeholder}
            </DroppableList>
          )}
        </Droppable>
      </DragDropContext>
      <TaskLeft
        list={list}
        removeFinishTask={removeFinishTask}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

const DroppableList = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export { ListWrapper };

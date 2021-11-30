import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListElement } from "./ListElement";

const ListWrapper = (props) => {
  const { list, taskToggler, filter, removeElement, onDragEnd } = props;

  const filteredList =
    filter === "non filter"
      ? list
      : list.filter((task) => task.completed === filter);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {filteredList.map((item, index) => (
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
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DroppableList = styled.div``;

export { ListWrapper };

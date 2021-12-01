import styled from "styled-components";
import { QUERIES } from "../constants";
import { useThemeContext } from "../context";
import { FilterList } from "./FilterList";
const TaskLeft = (props) => {
  const { list, removeFinishTask, filter, setFilter } = props;
  const leftTasks = list.filter((task) => !task.completed).length;
  const { theme } = useThemeContext();
  const bgColor =
    theme === "light" ? "white" : "var(--very-dark-desaturated-blue)";
  const hoverColor =
    theme === "light"
      ? "var(--very-dark-grayish-blue)"
      : "var(--very-light-grayish-blue)";
  return (
    <Wrapper bgColor={bgColor}>
      <p>{leftTasks} items left</p>
      <FilterListWrapper>
        <FilterList setFilter={setFilter} filter={filter} />
      </FilterListWrapper>
      <Button hoverColor={hoverColor} onClick={removeFinishTask}>
        clear completed
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.bgColor};
  padding: 14px 20px;
  color: hsla(235, 9%, 61%, 1);
  border-radius: 8px;
  @media ${QUERIES.tabletAndUp} {
    padding: 0px 24px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: hsla(235, 9%, 61%, 1);

  &:hover {
    color: ${(p) => p.hoverColor};
  }
`;

const FilterListWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;
export { TaskLeft };

import styled from "styled-components";
import { QUERIES } from "../constants";
import { useThemeContext } from "../context";

const FilterList = (props) => {
  const { setFilter, filter } = props;
  return (
    <div>
      <UL>
        <li>
          <Button
            onClick={() => setFilter("non filter")}
            style={{
              "--color": `${
                filter === "non filter"
                  ? "hsla(220, 98%, 61%, 1)"
                  : "hsla(235, 9%, 61%, 1)"
              }`,
            }}
          >
            all
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setFilter(false)}
            style={{
              "--color": `${
                filter === false
                  ? "hsla(220, 98%, 61%, 1)"
                  : "hsla(235, 9%, 61%, 1)"
              }`,
            }}
          >
            active
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setFilter(true)}
            style={{
              "--color": `${
                filter === true ? "var(--active-tab)" : "var(--left-text)"
              }`,
            }}
          >
            completed
          </Button>
        </li>
      </UL>
    </div>
  );
};

const UL = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 14px 20px;
  gap: 18px;
  border-radius: 8px;
  background-color: var(--background-task);

  @media ${QUERIES.tabletAndUp} {
    padding: 20px 24px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--color);
  font-weight: 700;

  &:hover {
    color: var(--task-text);
  }
`;
export { FilterList };

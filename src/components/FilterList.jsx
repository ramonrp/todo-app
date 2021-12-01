import styled from "styled-components";
import { QUERIES } from "../constants";
import { useThemeContext } from "../context";

const FilterList = (props) => {
  const { setFilter, filter } = props;
  const { theme } = useThemeContext();
  const bgColor =
    theme === "light" ? "white" : "var(--very-dark-desaturated-blue)";
  const hoverColor =
    theme === "light"
      ? "var(--very-dark-grayish-blue)"
      : "var(--very-light-grayish-blue)";
  return (
    <div>
      <UL bgColor={bgColor}>
        <li>
          <Button
            onClick={() => setFilter("non filter")}
            hoverColor={hoverColor}
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
            hoverColor={hoverColor}
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
            hoverColor={hoverColor}
            style={{
              "--color": `${
                filter === true
                  ? "hsla(220, 98%, 61%, 1)"
                  : "hsla(235, 9%, 61%, 1)"
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
  background-color: ${(p) => p.bgColor};

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
    color: ${(p) => p.hoverColor};
  }
`;
export { FilterList };

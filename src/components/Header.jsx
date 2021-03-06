import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { QUERIES } from "../constants";

import styled from "styled-components";

import VisuallyHidden from "./VisuallyHidden";
import { useThemeContext } from "../context";
export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <TitleContainer>
      <Title>TODO</Title>
      <IconButton onClick={toggleTheme}>
        {theme === "light" && <MoonIcon />}
        {theme === "dark" && <SunIcon />}
        <VisuallyHidden>Toggle Dark / Light Theme</VisuallyHidden>
      </IconButton>
    </TitleContainer>
  );
};

const TitleContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: white;
  margin-bottom: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 48px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  @media ${QUERIES.tabletAndUp} {
    font-size: ${40 / 18}rem;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  padding: 0;

  @media ${QUERIES.tabletAndUp} {
    width: 26px;
  }
`;

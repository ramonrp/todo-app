import backgroundLight from "../../public/images/bg-mobile-light.jpg";
import MoonIcon from "./MoonIcon";
import styled from "styled-components";

export const Header = () => {
  return (
    <TitleContainer>
      <h1>TODO</h1>
      <IconButton>
        <MoonIcon />
      </IconButton>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

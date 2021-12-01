import backgroundLightDesk from "../../public/images/bg-desktop-light.jpg";
import backgroundDarkDesk from "../../public/images/bg-desktop-dark.jpg";

import { QUERIES } from "../constants";

import styled from "styled-components";

import { GlobalStyles } from "../globalStyles";
import { Header } from "./Header";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { MainContainer } from "./MainContainer";
import { useThemeContext } from "../context";


function App() {
  const { theme } = useThemeContext();
  const bgImage = theme === "light" ? backgroundLightDesk : backgroundDarkDesk;
  const bgColor =
    theme === "light" ? "var(--very-light-gray)" : "var(--very-dark-blue)";
  return (
    <Wrapper bgImage={bgImage} bgColor={bgColor}>
      <MaxWidthWrapper>
        <Header />
        <MainContainer />
      </MaxWidthWrapper>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${(p) => p.bgColor};
  background-image: url(${(p) => p.bgImage});
  background-size: 100% 200px;
  background-repeat: no-repeat;
  padding-top: 48px;

  @media ${QUERIES.tabletAndUp} {
    background-size: 100% 300px;
    padding-top: 70px;
  }
`;

const CheckInput = styled.div`
  border: 1px solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: white;
  padding: 20px 14px;
  border-radius: 8px;
  &:focus-within {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 1px;
  }
`;

const TodoInput = styled.input`
  border: none;
  background-color: transparent;
  width: auto;
  &:focus-visible {
    outline: none;
  }
`;

const ListWrapper = styled.div`
  border: 1px solid;
  background-color: white;
`;
export default App;

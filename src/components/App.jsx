import backgroundLight from "../../public/images/bg-mobile-light.jpg";
import styled from "styled-components";

import { GlobalStyles } from "../globalStyles";
import { Header } from "./Header";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { MainContainer } from "./MainContainer";

function App() {
  return (
    <Wrapper>
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
  background-color: var(--very-light-gray);
  background-image: url(${backgroundLight});
  background-size: 100% 200px;
  background-repeat: no-repeat;
  padding-top: 48px;
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

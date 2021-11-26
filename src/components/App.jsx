import backgroundLight from "../../public/images/bg-mobile-light.jpg";
import styled from "styled-components";

import { GlobalStyles } from "../globalStyles";
import { Header } from "./Header";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function App() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Header />
        <GlobalStyles />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--very-light-gray);
  background-image: url(${backgroundLight});
  background-size: 100% 200px;
  background-repeat: no-repeat;
  padding-top: 50px;
`;

export default App;

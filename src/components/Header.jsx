import backgroundLight from "../../public/images/bg-mobile-light.jpg";
import iconMoon from "/images/icon-moon.svg";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <h1>TODO</h1>
        <button>Moon</button>
      </TitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./assets/images/background.jpeg";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  padding-top: ${(props) => props.ptop};
  margin-left: ${(props) => props.left};
  cursor: ${(props)=>props.cursur};
  border: ${(props) => props.border};
  display: ${(props) => props.display};
  background-color: ${(props) => props.bgclr};
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
`;

export const Title2 = styled.h2`
  font-weight: 700;
  font-family: "Sofia Pro";
  font-size: 18px;
  line-height: 18px;
`;
export const Description = styled.p`
  width: 440px;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  font-weight: 400;
  font-family: "Sofia Pro";
  font-size: 16px;
  line-height: 26px;
  color: #8f8f8f;
`;

export const Point = styled.h3`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  cursor: ${(props)=>props.cursur};
  font-weight: 400;
  font-family: "Sofia Pro";
  font-size: 16px;
  line-height: 26px;
  color: #8f8f8f;
`;

export const StyledButton = styled.button`
  width: 147px;
  height: 38px;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  padding: 8px 24px;
  color: #fff;
  background-color: #00008b;
  border-radius: 2%;
`;

export const StyledImg = styled.img`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  border-radius: ${(props) => props.br};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgclr};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const StyledBox = styled.input`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

//Components for Navbar

export const MainNav = styled.div`
  width: 1280px;
  height: 70px;
  margin-bottom: 50px;
  display: flex;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid black;
`;

export const StyledNav = styled.div`
  padding: 24px 10px;
  margin-left: 400px;
`;

export const StyledLink = styled(Link)`
  margin: 0 10px;
  color: black;

  &::selection {
    border: 1px solid black;
  }
`;

// Components for Footer

export const FooterContainer = styled(Container)`
  display: flex;
`;

// HomeHeader Components

export const StyledContainer = styled(Container)`
  background-color: rgba(20, 20, 20, 0.7);
  background-image: url(${background});
  padding: 170px 0;
`;

export const HpDescription = styled(Description)`
  width: ${(props) => props.width};
`;

export const HpStyledButton = styled(StyledButton)`
  background-color: #fff;
  color: #00008b;
  border: 1px solid #00008b;
`;

export const HpContainer = styled(Container)`
  width: 370px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 370px;
`;

//Components for Detail View

export const Cross = styled(Title2)`
  transform: translate(1230px,0);
  cursor: pointer;
`;
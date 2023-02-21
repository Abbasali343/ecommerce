import { useNavigate } from "react-router-dom";
import {
  FooterContainer,
  Container,
  StyledImg,
  Description,
  Title2,Point
} from "../components.style";
import img from "../assets/images/logo.png";
export default function Footer() {

  const navigate = useNavigate();

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry s standard dummy text ever since the 1500s";
  return (
    <>
      <FooterContainer top={'40px'} width={"1280px"} height={"332px"} bgclr={"#f9f9f9"}>
        <Container>
          <StyledImg src={img} width={"110px"} top={"50px"} left={"150px"} />
          <Description top={""} left={"170px"}>
            {text}
          </Description>
        </Container>
        
        <Container left={'170px'} top={'70px'}>
        <Title2>Links</Title2>
        <Point>Home</Point>
        <Point>Offer</Point>
        <Point>Repair</Point>
        <Point>Trade</Point>
        <Point onClick={()=>navigate('/contactus')} cursur={'pointer'}>Contact Us</Point>
        </Container>

        <Container left={'170px'} top={'70px'}>
        <Title2>Offer</Title2>
        <Point>Trade In</Point>
        <Point>Electrical Bycycles</Point>
        <Point>Transport Bycycles</Point>
        <Point>City Bikes</Point>
        <Point>Childrens Bycycles</Point>
        </Container>
      </FooterContainer>
      <FooterContainer>
        <Point left={'170px'}>© 2023 Vs_House - Created by Abbas Ali</Point>
        <Point left={'170px'}>Terms and Conditions</Point>
        <Point left={'170px'}>Privacy</Point>
      </FooterContainer>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import {
  StyledContainer,
  Container,
  HpContainer,
  Title,
  StyledImg,
  HpDescription,
  StyledButton,
  HpStyledButton,
} from "../components.style";

const data = [
  {
    type: "Transport",
    pic: pic1,
  },
  {
    type: "Electric",
    pic: pic2,
  },
  {
    type: "City",
    pic: pic3,
  },
  {
    type: "Children",
    pic: pic4,
  },
];

export default function HomeHeader() {

  const navigate = useNavigate();

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

  return (
    <>
      <StyledContainer ptop={'70px'} width={"1280px"} height={"190px"}>
        <Title left={"350px"}>For the best & cheapest deals</Title>
        <HpDescription width={'430px'} left={"350px"}>{text}</HpDescription>
        <HpContainer>
          <HpStyledButton onClick={()=>navigate('/products')}>View Offer</HpStyledButton>
          <StyledButton>Get In Touch</StyledButton>
        </HpContainer>
      </StyledContainer>
      <Title left={"430px"} top={"70px"}>
        What are you looking for?
      </Title>
      <HpDescription width={'430px'} left={"400px"} top={"40px"}>
        At VS Stores we have a wide range of different types of bicycles
      </HpDescription>
      <Container display={"flex"}>
        {data.map((item, key) => (
          <Container>
            <Container
              left={"90px"}
              top={"55px"}
              width={"194px"}
              height={"234px"}
              border={"1px solid black"}
            >
              <StyledImg
                left={"17px"}
                width={"150px"}
                height={"200px"}
                src={item.pic}
              ></StyledImg>
            </Container>
            <Container
              left={"90px"}
              width={"194px"}
              height={"54px"}
              border={"1px solid black"}
            >
              <Title left={"45px"}>{item.type}</Title>
            </Container>
          </Container>
        ))}
      </Container>
      <HpStyledButton onClick={()=>navigate('/products')} left={"510px"} top={"85px"}>
        Entire Offer
      </HpStyledButton>
     
    </>
  );
}

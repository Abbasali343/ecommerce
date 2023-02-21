import {
  Container,
  HpContainer,
  HpDescription,
  StyledBox,
  StyledButton,
  StyledImg,
  Title,
} from "../components.style";
import store from "../assets/images/store.jpeg";
import ContactForm from "./ContactForm";

export default function HomeFooter() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

  return (
    <>
      <Container display={"flex"} bgclr={"#f9f9f9"} top={"40px"} ptop={"40px"}>
        <Container left={"220px"}>
          <StyledImg width={"290px"} height={"250px"} src={store} />
        </Container>
        <Container left={"220px"}>
          <Title>About VS's two-wheelers</Title>
          <HpDescription width={"330px"}>{text}</HpDescription>
        </Container>
      </Container>
        <ContactForm />
      
    </>
  );
}

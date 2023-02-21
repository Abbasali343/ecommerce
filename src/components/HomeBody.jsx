import {
  Container,
  Title,
  HpDescription,
  StyledImg,
} from "../components.style";
import repair from "../assets/images/repair.png";
import trade from "../assets/images/trade.png";

const data = [
    {
        title:'Barbara Hooyer',
        description:'Een hele goede service na wat pech met een nieuwe fiets een prima oplossing en uitstekende service.'
    },
    {
        title:'Barbara Hooyer',
        description:'Een hele goede service na wat pech met een nieuwe fiets een prima oplossing en uitstekende service.'
    },
    {
        title:'Barbara Hooyer',
        description:'Een hele goede service na wat pech met een nieuwe fiets een prima oplossing en uitstekende service.'
    },
    {
        title:'Barbara Hooyer',
        description:'Een hele goede service na wat pech met een nieuwe fiets een prima oplossing en uitstekende service.'
    },
]

export default function HomeBody() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <>
      <Container
        width={"1280px"}
        height={"400px"}
        bgclr={"#f9f9f9"}
        top={"40px"}
        ptop={"40px"}
      >
        <Title left={"550px"}>Services</Title>
        <HpDescription width={"430px"} left={"450px"}>
          We are happy to help you and are ready for you
        </HpDescription>
        <Container display={"flex"}>
          <Container bgclr={"#fff"} border={"1px solid black"} left={"120px"}>
            <StyledImg
              left={"30px"}
              top={"20px"}
              width={"30px"}
              br={"50%"}
              bgclr={"yellow"}
              src={trade}
            />
            <Title left={"30px"}>Trade</Title>
            <HpDescription width={"430px"} left={"30px"}>
              {text}
            </HpDescription>
          </Container>
          <Container bgclr={"#fff"} border={"1px solid black"} left={"120px"}>
            <StyledImg
              left={"30px"}
              top={"20px"}
              width={"30px"}
              br={"50%"}
              bgclr={"yellow"}
              src={repair}
            />
            <Title left={"30px"}>Repair</Title>
            <HpDescription width={"430px"} left={"30px"}>
              {text}
            </HpDescription>
          </Container>
        </Container>
      </Container>

      <Title left={'450px'} top={'40px'}>Experiences of our customers</Title>
      <HpDescription left={'430px'}>Read the experience of people who went before you</HpDescription>
      <Container display={'flex'}>
        {
            data.map((item,key)=>(
                <>
                <Container height={'270px'} left={'70px'} width={'220px'} border={'1px solid black'}>
                    <HpDescription left={'20px'} top={'70px'} width={'170px'}>{item.description}</HpDescription>
                    <hr></hr>
                    <Title left={'20px'}>{item.title}</Title>
                </Container>
                </>
            ))
        }
      </Container>
    </>
  );
}

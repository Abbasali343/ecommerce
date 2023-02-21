import { useState } from "react";
import {
  Container,
  Title,
  Title2,
  HpDescription,
  StyledImg,
  StyledButton,
  Cross,
} from "../components.style";
import bike from "../assets/images/bicycle.jpeg";

const data = [
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    pic: bike,
    title: "Electric BIKKEL bicycle",
    price: "25000 PKR",
    heading: "Second hand - Brand - Frame size - Battery capacity",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
];

export default function AllBicycles() {
  const [detail, setDetail] = useState(false);
  const [detailData, setDetailData] = useState();

  function detailView(item) {
    if (detail===true) {
      setDetail(false);
    } else {
      setDetail(true);
    }
    if(item){
    setDetailData(item);
  }
  }

  return (
    <Container bgclr={"#f9f9f9"} ptop={"80px"}>
      {!detail && (
        <>
          <Title left={"70px"}>All Bicycles</Title>
          {data.map((item, index) => (
            <>
              <Container
                cursur={"pointer"}
                onClick={() => detailView(item)}
                top={"20px"}
                left={"70px"}
                display={"flex"}
                border={"1px solid black"}
                bgclr={"#fff"}
                width={"690px"}
                height={"290px"}
              >
                <Container left={"20px"} top={"30px"}>
                  <StyledImg
                    border={"1px solid black"}
                    width={"170px"}
                    src={item.pic}
                  />
                </Container>
                <Container left={"20px"} top={"10px"}>
                  <Title>{item.title}</Title>
                  <Title2>{item.price}</Title2>
                  <Title2>{item.heading}</Title2>
                  <HpDescription>{item.detail}</HpDescription>
                </Container>
              </Container>
            </>
          ))}
        </>
      )}
      {detail && (
        <>
          <Container bgclr={'#fff'} display={'flex'}>
            <Cross onClick={detailView}>X</Cross>
            <Container left={'40px'} top={'40px'}>
              <StyledImg
                border={"1px solid black"}
                width={"370px"}
                src={detailData.pic}
              />
              <Container>
                <StyledImg left={'20px'} width={'60px'} border={'1px solid black'} src={detailData.pic}/>
                <StyledImg left={'20px'} width={'60px'} border={'1px solid black'} src={detailData.pic}/>
                <StyledImg left={'20px'} width={'60px'} border={'1px solid black'} src={detailData.pic}/>
                <StyledImg left={'20px'} width={'60px'} border={'1px solid black'} src={detailData.pic}/>
              </Container>
            </Container>
            <Container left={'90px'} top={'30px'}>
            <Title>{detailData.title}</Title>
                  <Title2>{detailData.price}</Title2>
                  <Title2>{detailData.heading}</Title2>
                  <HpDescription>{detailData.detail}</HpDescription>
                  <Title2>Warranty information</Title2>
                  <HpDescription>No Warranty Available</HpDescription>
                  <Title>Are you interested in this bike?</Title>
                  <HpDescription>You can always reach us directly by telephone on 022-8234010.</HpDescription>
                  <StyledButton>Send Msg</StyledButton>
            </Container>
          </Container>
        </>
      )}
    </Container>
  );
}

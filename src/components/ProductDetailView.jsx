import { Container, Title, Title2,StyledImg } from "../components.style"

export default function ProductDetailView(prop){

    console.log(prop.state);

   const data = prop.state;

   function closeDetail(){
    prop.close();
   }

    return(
        <>
        <Container bgclr={'#ede9e9'} width={'980px'} ptop={'70px'}>
            <Title2 cursur={'pointer'} onClick={closeDetail} left={'850px'}>X</Title2>
            <Title left={'250px'} top={'70px'}>{data.title}</Title>
            <Title2 left={'250px'} top={'70px'}>price: {data.price}</Title2>
            <Title left={'250px'} top={'70px'}>{data.heading}</Title>
            <Title2 left={'250px'} width={'550px'} top={'70px'}>{data.detail}</Title2>
            <StyledImg src={prop.pic} />
            
        </Container>
        </>
    )
}
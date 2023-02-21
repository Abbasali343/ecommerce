import { Container,StyledButton,StyledImg,StyledBox,Title,Title2, HpDescription,Point } from "../components.style"
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'
import location from '../assets/images/location.png'

const data = [
    {
        title:'info@erikstweewielers.nl',
        pic: mail
    },
    {
        title:'022-80108803',
        pic: phone
    },
    {
        title:'Boerhaaveplein 1a 1611 EP Bovenkarspel',
        pic: location
    }
]

export default function ContactForm(){

    const text = 'Wij staan voor u klaar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return(
        <Container ptop={'40px'}  display={'flex'}>
        <Container left={'130px'}  width={'400px'} height={'400px'} >
            <Title>We are here for you!</Title>
            <HpDescription>{text}</HpDescription>
            <Title2>Contact Information</Title2>
            {
                data.map((item,key)=>(
                    <Container top={'10px'} display={'flex'}>
                <StyledImg width={'30px'} br={'50%'} bgclr={'yellow'} src={item.pic}/>
                <Point left={'30px'}>{item.title}</Point>
            </Container>
                ))
            }
            
        </Container>
        <Container left={'130px'} border={'1px solid black'} width={'400px'} height={'400px'} bgclr={'#f9f9f9'}>
            <Title left={'30px'}>Contact Form</Title>
            <StyledBox left={'30px'} top={'20px'} placeholder="Your Name"  width={'280px'} height={'30px'}/>
            <StyledBox left={'30px'} top={'20px'} placeholder="Your Email" width={'280px'} height={'30px'}/>
            <StyledBox left={'30px'} top={'20px'} placeholder="Type your message and/or question here" width={'280px'} height={'130px'}/>
            <StyledButton left={'90px'} top={'20px'}>Submit</StyledButton>
        </Container>
        </Container>
    )
}
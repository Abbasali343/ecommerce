import {Container,Title,StyledImg} from '../components.style'
import admin from '../assets/images/admin.png'

export default function AdminProfile(){
    return(
        <>
        <Container width={'980px'} ptop={'70px'} display={'flex'}>
            <Container>
            <Title left={'40px'} top={'45px'}>R. James</Title>
            <Title left={'40px'} top={'45px'}>r.james@gmail.com</Title>
            </Container>
            
            <StyledImg src={admin} left={'450px'} top={'40px'} width={'130px'} height={'130px'} />
        </Container>
        </>
    )
}
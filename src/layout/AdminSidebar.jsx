import { Container,AdminContainer, StyledImg, StyledLink } from "../components.style"
import logo from '../assets/images/logo.png'

export default function AdminSidebar(){
    return(
        <>
        <Container width={'300px'} height={'630px'} bgclr={'#f9f9f9'}>
            <StyledImg left={'110px'} top={'110px'} src={logo} width={'90px'} />
            <AdminContainer>
                <StyledLink to={'/admin'}>Profile</StyledLink>
                <StyledLink to={'/admin/products'}>Products</StyledLink>
                <StyledLink to={'/admin/orders'}>Orders</StyledLink>
            </AdminContainer>
        </Container>
        </>
    )
}
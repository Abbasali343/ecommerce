import { Outlet } from "react-router-dom";
import {
  MainNav,
  StyledButton,
  StyledNav,
  StyledLink,
  StyledImg,
} from "../components.style";
import img from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <MainNav>
        <StyledImg left={"170px"} src={img} ></StyledImg>
        <StyledNav>
          <StyledLink to={'/'}>Home</StyledLink>
          <StyledLink to={'/products'}>Offer</StyledLink>
          <StyledLink to={'/signin'}>SignIn</StyledLink>
          <StyledLink to={'/signup'}>SignUp</StyledLink>
        </StyledNav>
        <StyledButton top={"18px"} left={"50px"}>
          Go to Cart
        </StyledButton>
      </MainNav>
      <Outlet />
    </>
  );
}

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  AdminMainNav,
  StyledButton,
  StyledNav,
  AdminStyledLink,
  StyledImg,
  Container,
} from "../components.style";
import AdminSidebar from "../layout/AdminSidebar";
import img from "../assets/images/logo.png";

export default function AdminNavbar() {

  const navigate = useNavigate();

  return (
    <>
      <Container display={"flex"}>
        
        <AdminMainNav>
          <StyledImg left={"170px"} src={img}></StyledImg>
          <AdminStyledLink to={'/signin'} >SignOut</AdminStyledLink>
        </AdminMainNav>
        <AdminSidebar />
        <Outlet />
      </Container>

      
    </>
  );
}

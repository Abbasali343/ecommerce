import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container,StyledButton,StyledImg,StyledBox,Title,Title2, HpDescription,Point } from "../components.style"




export default function SignIn(){
    const [credit, setCredit] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredit((values) => ({ ...values, [name]: value }));
      };

    function signIn(){
        if (!validateEmail(credit.email)) {
            return window.alert("Enter a valid Email");
          } else if (!credit.password || credit.password.length < 8) {
            return window.alert("Password Must have at least 8 characters");
          } else {
            window.alert("Log In Successfully");
            navigate('/');
          }
     }

     const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        }
    
    return(
        <Container ptop={'90px'}  display={'flex'}>
        <Container left={'390px'} border={'1px solid black'} width={'400px'} height={'400px'} bgclr={'#f9f9f9'}>
            <Title left={'130px'}>Sign In</Title>
            <StyledBox type="text" name="email" onChange={handleChange} left={'30px'} top={'40px'} placeholder="Enter Email"  width={'280px'} height={'30px'}/>
            <StyledBox type="text" name="password" onChange={handleChange} left={'30px'} top={'40px'} placeholder="Enter Password" width={'280px'} height={'30px'}/>
            <StyledButton left={'90px'} top={'60px'} onClick={signIn}>SignIn</StyledButton>
        </Container>
        </Container>
    )
   
}
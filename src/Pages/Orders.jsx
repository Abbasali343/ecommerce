import { Container, Title,StyledTable,StyledTh,StyledTd } from "../components.style";
import bike from '../assets/images/bicycle.jpeg'
import { useState } from "react";

const data = [
    {
      name: 'Mikel',
      email: "mikel@gmail.com",
      status: "pending"
    },
    {
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },{
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },{
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },{
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },{
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },{
        name: 'Mikel',
        email: "mikel@gmail.com",
        status: "pending"
      },
  ];

export default function Orders(){




    return(
        <>
         <Container bgclr={'#ede9e9'} width={'980px'} ptop={'70px'}>
            <Title left={'30px'} top={'30px'}>All Orders</Title>
            <Container>
                
            <StyledTable>
        <tr>
          <StyledTh>Name</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Status</StyledTh>
          <StyledTh>Actions</StyledTh>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <StyledTd cursur={'pointer'} >{val.name}</StyledTd>
              <StyledTd>{val.email}</StyledTd>
              <StyledTd>{val.status}</StyledTd>
              <StyledTd cursur={'pointer'}>Complete</StyledTd>
            </tr>
          )
        })}
      </StyledTable>
            </Container>
        </Container>
        </>
    )
}
import { useState } from "react";
import { Container, Title,StyledTable,StyledTh,StyledTd } from "../components.style";
import bike from '../assets/images/bicycle.jpeg'
import ProductDetailView from "../components/ProductDetailView";

const details = [
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

  

export default function AllProducts(prop){

  const [data,setData] = useState(details);

    function detailView(val){
        
        prop.view(val);
      }

      function deleteItem(index){
        setTaskList((pre)=>{
          return pre.filter((arrElement,index)=>{
              return index !== prop;
          })
      })

      }

    return(
        <>
        <Container bgclr={'#ede9e9'} width={'980px'} ptop={'70px'}>
            <Title left={'30px'} top={'30px'}>All Products</Title>
            <Container>
                
            <StyledTable>
        <tr>
          <StyledTh>Title</StyledTh>
          <StyledTh>Price</StyledTh>
          <StyledTh>Actions</StyledTh>
        </tr>
        {data.map((val, index) => {
          return (
            <tr key={index}>
              <StyledTd cursur={'pointer'} onClick={()=>detailView(val)}>{val.title}</StyledTd>
              <StyledTd>{val.price}</StyledTd>
              <StyledTd cursur={'pointer'} onClick={()=>deleteItem(index)}>Delete</StyledTd>
            </tr>
          )
        })}
      </StyledTable>
            </Container>
        </Container>
        </>
    )
}
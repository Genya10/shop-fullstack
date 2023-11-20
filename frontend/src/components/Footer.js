import React from "react";
import {Container,Nav,Navbar,Image} from 'react-bootstrap';
import shtangist from "../assets/shtangist.jpg";

export const Footer =()=>{
    return(
        <div style={{marginTop:"50px"}}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <h2 style={{fontSize:"32px",color:"black",marginRight:"20px"}}>Для связи:</h2>
          <Nav className="me-auto d-flex flex-column ">
            <Nav.Link href="tel:+8 066 154 2568">066 154 25 68</Nav.Link>
            <Nav.Link href="mailto:kuzyashevqeka@gmail.com">kuzyashevqeka@gmail.com</Nav.Link>        
            <Nav.Link href="https://www.google.com/maps/place/%D0%97%D0%B0%D0%BB%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+33,+%D0%A1%D1%83%D0%BC%D1%8B,+%D0%A1%D1%83%D0%BC%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+40000/@50.9141006,34.8219058,17z/data=!3m1!4b1!4m6!3m5!1s0x4129021780cadbab:0xac85c6e45bee9428!8m2!3d50.9141006!4d34.8219058!16s%2Fg%2F1tjcm_g4?entry=ttu"
              target="_blank">г.Сумы,Заливная,33</Nav.Link>
          </Nav>
          <Image src={shtangist} width={300}/>
        </Container>
      </Navbar>
      </div>
    )
}
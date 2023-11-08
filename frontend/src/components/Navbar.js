import { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';

export const NavBar =observer(()=>{
  const {user}=useContext(Context)
  console.log(user._isAuth)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={"outline-light"}>Admin</Button>
            <Button variant={"outline-light"} style={{marginLeft:"10px"}}>Enter</Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant={"outline-light"}
            onClick={()=>user.setIsAuth(true)}>Authorization</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});




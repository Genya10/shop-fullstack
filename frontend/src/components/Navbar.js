import { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';

export const NavBar = observer(()=>{
  const {user}=useContext(Context)
  const navigate = useNavigate()

  const logout = ()=>{
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button            
            variant={"outline-light"}
            onClick={()=>navigate(ADMIN_ROUTE)}
            >Admin</Button>
            <Button 
            variant={"outline-light"} style={{marginLeft:"10px"}}
            onClick={()=>logout()}
            >Go out</Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant={"outline-light"}
            onClick={()=>navigate(LOGIN_ROUTE)}>Authorization</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});




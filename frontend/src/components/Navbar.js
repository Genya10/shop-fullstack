import { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,BASKET_ROUTE } from '../utils/const';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';
import flag from '../assets/flagOfUkraine.png';
import { Image } from 'react-bootstrap';

export const NavBar = observer(()=>{
  const {user,device} = useContext(Context)
  const navigate = useNavigate()

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    user.setIsRole({});
    device.clearBasket();
    console.log(device)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <div >
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Экипировка для тяжелой атлетики
        </NavLink>
        <Image src={flag} width={80} style={{marginLeft:'15px'}}/>
        </div>       
        {user.isAuth ? (
          <Nav className="ml-auto">           
               <Button            
            variant={"outline-light"}
            onClick={()=>navigate(ADMIN_ROUTE)}
            >Админ
            </Button>       
            <Button
              variant={"outline-light"}
              onClick={()=>navigate(BASKET_ROUTE)}
              className="ms-3">
                Корзина
            </Button>
            
            <Button 
            variant={"outline-light"} style={{marginLeft:"10px"}}
            onClick={()=>logout()}
            >Выйти
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant={"outline-light"}
            onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});




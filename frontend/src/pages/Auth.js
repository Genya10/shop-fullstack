import React, { useState,useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import {NavLink,useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import {login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

export const Auth = observer(()=>{
  const {user}=useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async()=>{
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      await user.setUser(data);
      //user.setUser(user)
      user.setIsAuth(true);
      user.setIsRole(data.role);
      console.log('User data after successful login:', user);
      navigate(SHOP_ROUTE);
      console.log(user)
    } catch (e) {
      alert(e.response.data.message);
    }
}
  return(
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height:window.innerHeight-54}}>
      <Card style={{width:'600px'}} className='p-5'>
          <h2 className='m-auto'>{isLogin ?'Авторизация':'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
            <Form.Control 
              className='mt-3'
              placeholder='введите ваш email'
              value={email}
              onChange={e=>setEmail(e.target.value)}/>
            <Form.Control 
              type='password'
              className='mt-3'
              placeholder='введите ваш пароль'
              value={password}
              onChange={e=>setPassword(e.target.value)}/>
        </Form>    
        <Row className='d-flex justify-content-between mt-3'>
          {isLogin ?
          <div>
            Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
          </div>
          :
          <div>
            Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Вход</NavLink>
          </div>}
          <Button variant={'outline-success'}
                onClick={click}>                    
            {isLogin ? 'Вход':'Регистрация'}
          </Button>
          </Row>        
      </Card>
    </Container>
    )
})
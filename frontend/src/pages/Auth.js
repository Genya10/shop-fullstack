import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import {NavLink,useLocation} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import {login, registration } from '../http/userAPI';

export const Auth = ()=>{
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async()=>{
      if(isLogin){
        const response = await login()
      }else{
        const response = await registration(email,password)
        console.log(response)
      }           
    }

    return(
      <Container
       className='d-flex justify-content-center align-items-center'
       style={{height:window.innerHeight-54}}>
        <Card style={{width:'600px'}} className='p-5'>
            <h2 className='m-auto'>{isLogin ?'Authorization':'Registretion'}</h2>
          <Form className='d-flex flex-column'>
             <Form.Control 
                  className='mt-3'
                  placeholder='enter your email'
                  value={email}
                  onChange={e=>setEmail(e.target.value)}/>
                 <Form.Control 
                   type='password'
                   className='mt-3'
                   placeholder='enter your password'
                   value={password}
                   onChange={e=>setPassword(e.target.value)}/>
          </Form>    
          <Row className='d-flex justify-content-between mt-3'>
            {isLogin ?
            <div>
              Don't have an account?<NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
            </div>
            :
            <div>
                Do you have account<NavLink to={LOGIN_ROUTE}>Enter</NavLink>
            </div>}
            <Button variant={'outline-success'}
                  onClick={click}>                    
              {isLogin ? 'Enter':'Registration'}
            </Button>
            </Row>        
        </Card>
       </Container>
    )
}
import React,{useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { getBasket } from '../http/deviceAPI';
import { Card,Col,Container,Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const Basket = observer(()=>{
    const {device} = useContext(Context);
    useEffect(()=>{
        getBasket().then(data=> device.setBasket(data))
    },[]);

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price))}

    return(
  <Container
  className='d-flex flex-sm-column justify-content-center align-items-center mt-3'>
   <h1 className='pb-2'>Корзина</h1>
     
  </Container>
    )
});
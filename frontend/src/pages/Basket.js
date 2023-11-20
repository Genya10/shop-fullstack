import React,{useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { getBasket } from '../http/deviceAPI';
import { Card,Col,Container,Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const Basket = observer(()=>{
    const {device} = useContext(Context);
    console.log('Basket rerender!')

    useEffect(()=>{
        getBasket().then(data=> device.setBasket(data))
        console.log('rerender')
    },[]);
   /* useEffect(()=>{
      const fetchData = async ()=>{
        const data = await getBasket();
        device.setBasket(data);
      };
      fetchData();
      console.log('rerender useEffect')
    },[device.id]);*/

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price))}

    const handleRemoveItem = (productId)=>{
      console.log("Rem",productId)
      device.removeFromBasket(productId)
    }

    return (
      <Container className="d-flex flex-sm-column justify-content-center align-items-center mt-3">
        <h1 className="pb-2">Корзина</h1>

        <Card>
          <h2 className="d-flex flex-row p-2 justify-content-between align-items-center mb-2">
            Сумма:
          </h2>
          <h3 className="pr-2">
            {prices}
            <span className="font-weight-light pl-3">грн</span>
          </h3>
        </Card>

        {device.basket.map((prod) => (
          <Card
            className="d-flex w-100 p-2 justify-content-center mb-2"
            key={prod.id}
          >
            <Row className="d-flex w-100">
              <Col>
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={"http://localhost:5000/" + prod.device.img}
                    width={80}
                  />
                  <h2 style={{paddingLeft:'10px'}}>{prod.device.name}</h2>
                </div>
              </Col>
              <Col>
                <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                  <h3 className="font-weight-light">{prod.device.price}грн</h3>
                  <div onClick={()=> handleRemoveItem(prod.id)} style={{marginLeft:'10px',cursor:'pointer'}}>X</div>
                </div>        
             </Col>
            </Row>
          </Card>
        ))}
      </Container>
    );
});
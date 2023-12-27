import React,{useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { getBasket } from '../http/basketAPI';
import { Card,Col,Container,Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const Basket = observer(()=>{
    const {device} = useContext(Context);
    console.log('Basket rerender!')

     useEffect(()=>{
        getBasket().then(data=> device.setBasket(data))
        console.log('rerender')
    },[]);

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price))}

    /* const handleRemoveItem = async (productId)=>{
      console.log("Rem",productId)
      await device.removeFromBasket(productId)
      await device.clearBasket(productId)
    }
      */
   const handleRemoveItem = async (productId) => {
      console.log("Rem", productId);
      try {
          // 1. Выполнить запрос на сервер для удаления товара
           console.log('Before clearBasket');
          await device.clearBasket(productId);
           console.log('After clearBasket');
          // 2. Обновить корзину в MobX store
          const updatedBasket = device.basket.filter(item => item.id !== productId);
          console.log('Updated Basket:', updatedBasket);
          device.setBasket(updatedBasket);
      } catch (error) {
          console.error("Error while removing item:", error);
      }
  };

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

  /* useEffect(()=>{
      const fetchData = async ()=>{
        const data = await getBasket();
        device.setBasket(data);
      };
      fetchData();
      console.log('rerender useEffect')
    },[device.id]);*/
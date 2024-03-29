import React,{useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { getBasket } from '../http/basketAPI';
import { Card,Col,Container,Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const Basket = observer(()=>{
    const {basket} = useContext(Context);
    console.log('Basket rerender!')

     /*useEffect(()=>{
        getBasket().then(data=> basket.setBasket(data))
        console.log('rerender')
    },[]);*/

    useEffect(()=>{
      const fetchData = async()=>{
        try{
         const data = await getBasket();
         basket.setBasket(data);
         console.log('rerender')
        } catch(error){
         console.error('Error fetching basket data:',error)
        }
      }
      fetchData();
  },[basket]);

    let prices = 0;
    {basket.basket.map(price =>
        prices += Number(price.device.price))}

   const handleRemoveItem = async (productId) => {
      console.log("Rem", productId);
      try {
          // 1. Выполнить запрос на сервер для удаления товара
           console.log('Before clearBasket');
          await basket.clearBasket(productId);
           console.log('After clearBasket');
          // 2. Обновить корзину в MobX store
          const updatedBasket = basket.basket.filter(item => item.id !== productId);
          console.log('Updated Basket:', updatedBasket);
          basket.setBasket(updatedBasket);
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

      {basket.basket.map((prod) => (
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

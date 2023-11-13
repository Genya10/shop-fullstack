import React,{useEffect,useState} from 'react';
import {Col,Container,Image,Row,Card,Button} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

export const DevicePage = ()=>{
    const [device,setDevice]=useState({info:[]})   
    const {id} = useParams()
    console.log({id})
    useEffect(()=>{
      fetchOneDevice(id).then(data=>setDevice(data))
    },[])

    return (
      <Container className='mt-3'>
        <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
         <Row className='d-flex flex-column align-items-center'>
            <h2 style={{textAlign:'center'}}>{device.name}</h2>
            <div 
            className='d-flex align-items-center justify-content-center'
            style={{background:`url(${bigStar}) no-repeat center center`,width:260,height:260,backgroundSize:'cover',fontSize:60}}
            >
                {device.rating}
            </div>
         </Row>
        </Col>
        <Col md={4}>
         <Card
           className='d-flex flex-column align-items-center justify-content-around'
           style={{width:300,height:300,fontSize:32,border:'5px solid lightgray'}}>
            <h3>{device.price}</h3>
            <Button variant={'outline-dark'}>Add to basket</Button>
         </Card>
        </Col>
        </Row>
        <Row className='m-3'>
            <h2>Characteristics</h2>
            {device.info.map((info,index)=>
                <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgray':'transparent',padding:5}}>
                    {info.title}:{info.description}</Row>
            )}
        </Row>
      </Container>
    );
}
/*
  const device =   {id:1,name:"Smartphone",price:12000,rating:5,
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"}
  const description =[
    {id:1,title:'memory',description:'5 gb'},
    {id:2,title:'camera',description:'12 mp'},
    {id:3,title:'proccesor',description:'pentium 3'},
    {id:4,title:'cors',description:'3'},
    {id:5,title:'accumulator',description:'3000'},
  ]
 */
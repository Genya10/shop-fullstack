import React from "react";
import {Col,Card} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/const";

export const DeviceItem=({device})=>{
  const navigate = useNavigate()
  
    return(
        <Col md={3} className={'mt-3'} onClick={()=>{         
          console.log("Devide ID:", device.id)
          navigate(DEVICE_ROUTE + '/' + device.id)}
        } >
        <Card style={{width:150,cursor:'pointer'}} border={'light'}>
        <Image width={150} height={150} src={device.id ?`http://localhost:5000/${device.img}`:''}/>
         
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>Товар</div>
            <div className="d-flex align-items-center">
                <div>{device.rating}</div>
                <Image src={star} width={18} height={18}/>
            </div>
          </div>
          <div>{device.name}</div>
        </Card>
        </Col>
    )
}

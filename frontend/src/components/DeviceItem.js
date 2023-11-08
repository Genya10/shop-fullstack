import React from "react";
import {Col,Card} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";

export const DeviceItem=({device})=>{
console.log(device)
    return(
        <Col md={3}>
        <Card style={{width:150,cursor:'pointer'}} border={'light'}>
          <Image width={150} height={150} src={device.img}/>
          <div className="d-flex justify-content-between align-items-center">
            <div>Samsung..</div>
            <div className="d-flex">
                <div>{device.rating}</div>
                <Image src={star}/>
            </div>
          </div>
        </Card>
        </Col>
    )
}
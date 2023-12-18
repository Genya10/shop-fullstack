import React from 'react';
import {Button,Container} from "react-bootstrap";
import { CreateBrand } from '../components/modals/CreateBrand';
import { CreateDevice } from '../components/modals/CreateDevice';
import { CreateType } from '../components/modals/CreateType';
import { useState } from 'react';

export const Admin = ()=>{
    const [brandVisible,setBrandVisible] = useState(false);
    const [typeVisible,setTypeVisible] = useState(false);
    const [deviceVisible,setDeviceVisible] = useState(false);
    const onHideBrand=()=>{
        setBrandVisible(false)
    }
    const onHideType=()=>{
        setTypeVisible(false)
    }
    const onHideDevice=()=>{
        setDeviceVisible(false)
    }

    return(
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-3'
                onClick={()=>{setTypeVisible(true)}}>
                Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-2 p-3'
                onClick={()=>{setBrandVisible(true)}}>
                Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-2 p-3'
                onClick={()=>{setDeviceVisible(true)}}>
                Добавить товар</Button>
            <CreateBrand show={brandVisible} onHide={onHideBrand}/>
            <CreateDevice show={deviceVisible} onHide={onHideDevice}/>
            <CreateType show={typeVisible} onHide={onHideType}/>
        </Container>
    )
}
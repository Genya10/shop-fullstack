import React from 'react';
import {Button,Container} from "react-bootstrap";

export const Admin = ()=>{
    return(
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-3'>
                Add type</Button>
            <Button variant={'outline-dark'} className='mt-2 p-3'>
                Add brand</Button>
            <Button variant={'outline-dark'} className='mt-2 p-3'>
                Add device</Button>
        </Container>
    )
}
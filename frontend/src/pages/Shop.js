import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeBar } from '../components/TypeBar';

export const Shop = ()=>{
    return (
      <Container>
        <Row className='mt-2'>
          <Col md={3}>
            <TypeBar />
          </Col>
          <Col md={9}></Col>
        </Row>
      </Container>
    );
}
import { Box } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid style={{
      backgroundColor:'#181D31',
      color:'#fff',
      marginTop:'30px',
      padding:'20px'
    }}>
      <Row>
      <Col className='d-none d-md-block' md={4} style={{
          padding:'20px'
        }}>
          
        </Col>
        <Col sm={6} md={4} style={{
          padding:'30px'
        }}>
          <h5 style={{
            marginBottom:'40px'
          }}>CONTRACT</h5>
          
          <h6>Address</h6>
          <p>AC Habitat Hotel. 2 Soi Ramkhamhaeng 42, </p>
          <p>Hua Mak, Bang Kapi, Bangkok</p>
          <h6>Tel.</h6>
          <p>+66 84 9000 772</p>
          <h6>Email</h6>
          <p>rsvnachabitatbkk@gmail.com</p>
 
        </Col>
        <Col sm={6} md={4} style={{
          padding:'30px'
        }}>
          <h5>MAP</h5>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
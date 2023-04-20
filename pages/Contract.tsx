import { maxWidth } from '@mui/system'
import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../component/Footer'
import Header from '../component/Header'
import IntroSlide from '../component/Home/IntroSlide'

const Contract = () => {
  return (
    <Fragment>
        <Header />
        <Container fluid style={{
        marginTop:'45px',
      }}>
        <Row >
          <Col className="d-none d-md-block" style={{
            height:'100vh',
            backgroundImage:'url(/images/2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            maxWidth:'50%',
            backgroundPosition: 'center center',
          }}>
            
          </Col>
          <Col sm={12} md={6}
          style={{
            padding:0,

          }}>
          <Card style={{
            height:'100vh',
            padding:0,
            borderRadius:0,
            boxShadow:'none',
            border:'none'
          }}>

      <Card.Body style={{
        padding:'50px'
      }}>
        <Card.Title>AC CONTRACT</Card.Title>
        <Card.Text >
            เราเป็นโรงแรมที่ให้พร้อมบริการคุณตลอด 24 ชั่วโมง อยู่ในย่านเศษฐกิจใจกลางกรุงเทพ สามารถเดินทางได้สะดวก พร้อมกับ ที่จอดรถในร่ม ฟิตเนส และ สระว่ายน้ำ ที่สามารถใช้บริการได้ฟรีตลอดระยะเวลาการเข้าพัก และ 
            ยังมีบริการเสริมที่คุณลูกค้าสามารถใช้บริการได้ เช่น บริการห้องจัดเลี้ยง บริการห้องอาหาร 
        </Card.Text>

      </Card.Body>
      
    </Card>
          </Col>
        </Row>
        
      </Container>
      <Footer/>
    </Fragment>
  )
}

export default Contract
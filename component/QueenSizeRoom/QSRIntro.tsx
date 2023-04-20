import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import KSRIntroSlide from '../KingSizeRoom/KSRIntroSlide'
import QSRIntroSlide from './QSRIntroSlide'

const QSRIntro = () => {
  return (
    <Container fluid="xxl" style={{
        marginTop:'60px',
      }}>
        <Row>
          <Col sm={12} md={6}>
            <QSRIntroSlide/>
          </Col>
          <Col sm={12} md={6}>
          <Card style={{
            height:'100%',
          }}>

      <Card.Body style={{
        padding:'50px'
      }}>
        <Card.Title>QUEEN SIZE ROOM</Card.Title>
        <Card.Text >
            เราเป็นโรงแรมที่ให้พร้อมบริการคุณตลอด 24 ชั่วโมง อยู่ในย่านเศษฐกิจใจกลางกรุงเทพ สามารถเดินทางได้สะดวก พร้อมกับ ที่จอดรถในร่ม ฟิตเนส และ สระว่ายน้ำ ที่สามารถใช้บริการได้ฟรีตลอดระยะเวลาการเข้าพัก และ 
            ยังมีบริการเสริมที่คุณลูกค้าสามารถใช้บริการได้ เช่น บริการห้องจัดเลี้ยง บริการห้องอาหาร 
        </Card.Text>

      </Card.Body>
      <Card.Footer style={{
        display:'flex'
      }}>
        <Card.Text style={{
          width:'50%',
        }}>Tel. 081-933-1020</Card.Text>
        <div style={{
          width:'50%',
          textAlign:'end'
        }}>
        <Button variant="success" >Book Now</Button>
        </div>
      </Card.Footer>
    </Card>
          </Col>
        </Row>
        
      </Container>
  )
}

export default QSRIntro
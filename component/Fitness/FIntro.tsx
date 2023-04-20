import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import KSRIntroSlide from '../KingSizeRoom/KSRIntroSlide'
import FIntroSlide from './FIntroSlide'

const FIntro = () => {
  return (
    <Container fluid="xxl" style={{
        marginTop:'60px',
      }}>
        <Row>
          <Col sm={12} md={6}>
            <FIntroSlide/>
          </Col>
          <Col sm={12} md={6}>
          <Card style={{
            height:'100%',
          }}>

      <Card.Body style={{
        padding:'50px'
      }}>
        <Card.Title>FITNESS</Card.Title>
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

        </div>
      </Card.Footer>
    </Card>
          </Col>
        </Row>
        
      </Container>
  )
}

export default FIntro
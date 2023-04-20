import Link from 'next/link'
import React, { Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import FitnessSlide from './FitnessSlide'
import IntroSlide from './IntroSlide'

const HomeFitness = () => {
  return (
    <Fragment>
      <Container
        fluid
        style={{
          marginTop: "20px",
        }}
      >
        <Row>
          <Col
            style={{
              paddingLeft: "30px",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontSize: "30px",
              backgroundColor: "#212121",
              fontFamily: "Arial",
              fontWeight: "1000",
              color: "#ffffff",
            }}
            md={12}
          >
            FITNESS
          </Col>
        </Row>
      </Container>
    <Container fluid="xxl" style={{
        marginTop:'60px',
      }}>
        <Row>
          <Col sm={12} md={6}>
            <FitnessSlide/>
          </Col>
          <Col sm={12} md={6}>
          <Card style={{
            height:'100%',
          }}>

      <Card.Body style={{
        padding:'50px'
      }}>
        <Card.Title>AC FIT</Card.Title>
        <Card.Text >
            นอกจากบริการโรงแรมแล้วเรายังมี Fitness ให้ผู้ใช้บริการได้ใช้งานกันแบบฟรีๆ ถึง 2 ท่าน 
            หรือ หากท่านใดสนใจที่จะมาใช้บริการโดยไม่ได้เช่าห้องพัก เราก็มีบริการให้โดย หากเป็นรายวัน ครั้งละ 300 และ รายเดือน เดือนละ 3000
            โดยมีให้บริการอยู่ทั้งหมด 2 จุดปริการ ได้แก่ ....
            ....
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
        <Link href="./Fitness"><Button variant="primary" >เพิ่มเติม</Button></Link>
        </div>
      </Card.Footer>
    </Card>
          </Col>
        </Row>
        
      </Container>
      </Fragment>
  )
}

export default HomeFitness
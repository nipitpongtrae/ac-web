import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const HomeRoomStudio = () => {
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
            ROOM STUDIO
          </Col>
        </Row>
      </Container>
      <Container fluid="xxl">
        <Row>
          <Col sm={12} md={6} style={{
            padding:'50px'
          }}>
            <Card>
              <Card.Img variant="top" src="images/46.jpg" />
              <Card.Body>
                <Card.Title>King Size</Card.Title>
                <Card.Text>
                  ห้องขนาด : 30 ตร.ม.
                </Card.Text>
                <Button variant="primary" href="./KingSizeRoom">เพิ่มเติม</Button>
              </Card.Body>

            </Card>
          </Col>
          <Col sm={12} md={6} style={{
            padding:'50px'
          }}>
            <Card>
              <Card.Img variant="top" src="images/44.jpg" />
              <Card.Body>
                <Card.Title>Queen Size</Card.Title>
                <Card.Text>
                ห้องขนาด : 30 ตร.ม.
                </Card.Text>
                <Button variant="primary" href="./QueenSizeRoom">เพิ่มเติม</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeRoomStudio;

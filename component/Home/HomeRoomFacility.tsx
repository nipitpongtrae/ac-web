import React, { Fragment } from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

const HomeRoomFacility = () => {
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
            ROOM FACILITY
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Card style={{
            marginTop:'40px'
          }}>
            <Card.Body>
                <Card.Title>
                WHAT COMES AS STANDARD?
                </Card.Title>
      
            <Table>
              <thead>
                <tr>
                  <th>Wifi</th>
                  <th>Fridge</th>
                  <th>Microwave</th>
                </tr>
                <tr>
                  <th>TV</th>
                  <th>Air-Conditioning</th>
                  <th>Telephone</th>
                </tr>

                <tr>
                  <th>7-11</th>
                  <th>indoor parking</th>
                  <th></th>
                </tr>

                <tr>
                  <th>indoor swimming pool</th>
                  <th> fitness</th>
                  <th>working space</th>
                </tr>
              </thead>
             
            </Table>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeRoomFacility;

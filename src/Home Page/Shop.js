import React, { useEffect } from "react";
import { Card, Button, Carousel, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Shop extends React.Component{
    render(){
        return(
            <div style={{paddingBottom:'20px'}} >
                <Container fluid style={{paddingBottom:'50px',borderTopColor:'black', borderTopWidth:'5px' , backgroundColor:'cornsilk', marginTop:'70px', minHeight:'700px'}}>
                <Row xs={2} md={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card style={{maxHeight: '100px', objectFit: 'contain'}}>
        <Card.Img variant="top" src="/myntra/1.png" />
        <Card.Body>
          <Card.Title>Men's Shirt</Card.Title>
          <Card.Text>
           $21
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
                </Container>
            </div>
        )
    }
}
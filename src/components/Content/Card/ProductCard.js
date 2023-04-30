import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const ProductCard = ({ product }) => {
  return (
    <>
          <Col md={2} className="product">
            <a href="#">
              <Card style={{ width: '12rem' }} className="card">
                <Card.Img src={product.img}/>
                <Card.Body>
                  <Card.Text className="content-product" title={product.content}>{product.content}</Card.Text>
                  <Card.Text className="price">{product.price}</Card.Text>
                </Card.Body>
              </Card> 
            </a>
          </Col>
    </>
  )
};

export default ProductCard;
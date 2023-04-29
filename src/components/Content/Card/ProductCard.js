import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        // <li className="product">
          <Col md={2} className="product">
            <a href="#">
              <Card key={index} style={{ width: '12rem' }} className="card">
                <Card.Img variant={index} src={product.img} />
                <Card.Body>
                  <Card.Text className="content-product" title={product.content}>{product.content}</Card.Text>
                  <Card.Text className="price">{product.price}</Card.Text>
                </Card.Body>
              </Card> 
          </a>
          </Col>

        // </li>
      ))};
    </>
  )
};

export default ProductCard;
import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card style={{ width: '12rem' }} className="card">
        <Card.Img src={product.img} />
        <Card.Body>
          <Card.Text className="content-product" title={product.content}>{product.content}</Card.Text>
          <Card.Text className="price">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
};

export default ProductCard;
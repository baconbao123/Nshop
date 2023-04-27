import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = (props) => {
    const { data } = props
    return (
        <Card>
            <Card.Img variant="top" src="data.img"/>
            <Card.Body>
                <Card.Text>{data.content}</Card.Text>
                <Card.Text>{data.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
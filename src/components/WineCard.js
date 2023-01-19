import * as React from 'react'
import { Card, Button } from 'react-bootstrap';

function WineCard(props) {
    const { title, image, description, price, handleClick } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height: '515px'}} src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle style={{fontStyle: 'oblique'}}>฿ {price}</Card.Subtitle>
                <Card.Text>By {description}</Card.Text>
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
export default WineCard
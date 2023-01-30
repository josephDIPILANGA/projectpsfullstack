import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
const ProductScreen = () => {
  return (
    <div>
          <Link className='btn btn-dark my-3' to='/'> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>product name</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>link</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            price: 25 EUROS
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>Status: </Col>
                                </Row>  
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </div>
  )
}

export default ProductScreen

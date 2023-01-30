import React from 'react'
import {Row, Col} from 'react-bootstrap'
// import {Product} from '.components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1>Last posts</h1>
      <Row>
            <Col sm={12} md={6} xl={3}>
                <h3>TITRE</h3>
                <p>coucou this is me ...........</p>
            </Col>
            <Col sm={12} md={6} xl={3}>
                <h3>TITRE</h3>
                <p>coucou this is me ...........</p>
            </Col>
            <Col sm={12} md={6} xl={3}>
                <h3>TITRE</h3>
                <p>coucou this is me ...........</p>
            </Col>
      </Row>
    </>
  )
}

export default HomeScreen

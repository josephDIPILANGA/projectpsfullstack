import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'


// ${product.id}

const Product = () => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link href={`/product/`}>
        <Card.Img variant='top' />
      </Link>

      <Card.Body>
        <Link href={`/product/`}>
            <Card.Title as='div'>
                <strong>product name</strong>
            </Card.Title>
        </Link>

        <Card.Text>
            <div className='my-3'>
                product rating
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product

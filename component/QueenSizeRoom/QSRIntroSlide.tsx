import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const QSRIntroSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/32.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/42.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/43.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/44.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  )
}

export default QSRIntroSlide

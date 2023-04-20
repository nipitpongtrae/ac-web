import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const IntroSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/2.jpg"
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
          src="/images/47.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default IntroSlide
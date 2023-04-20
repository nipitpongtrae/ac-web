import React from 'react'
import { Carousel } from 'react-bootstrap'

const FitnessSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/21.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/26.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/29.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default FitnessSlide
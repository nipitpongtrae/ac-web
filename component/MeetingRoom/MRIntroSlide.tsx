import React from 'react'
import { Carousel } from 'react-bootstrap'

const MRIntroSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/3.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/5.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/6.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/7.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  )
}

export default MRIntroSlide
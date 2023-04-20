import React from 'react'
import { Carousel } from 'react-bootstrap'

const MeetingSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/5.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/6.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>

        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/7.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MeetingSlide
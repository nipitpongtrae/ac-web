import React, { Fragment } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import MRIntro from '../component/MeetingRoom/MRIntro'

const MeetingRoom = () => {
  return (
    <Fragment>
        <Header/>
            <MRIntro/>
        <Footer/>
    </Fragment>
  )
}

export default MeetingRoom
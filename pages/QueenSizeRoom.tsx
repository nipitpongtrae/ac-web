import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import QSRIntro from '../component/QueenSizeRoom/QSRIntro'
import QSRRoomFacility from '../component/QueenSizeRoom/QSRRoomFacility'

const QueenSizeRoom = () => {
  return (
    <Fragment>
        <Header />
        <QSRIntro/>
        <QSRRoomFacility/>
        <Footer/>
    </Fragment>
  )
}

export default QueenSizeRoom
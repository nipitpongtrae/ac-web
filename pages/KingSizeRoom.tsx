import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import HomeIntro from '../component/Home/HomeIntro';
import KSRIntro from '../component/KingSizeRoom/KSRIntro';
import KSRRoomFacility from '../component/KingSizeRoom/KSRRoomFacility';

const KingSizeRoom = () => {

    
  return (
    <Fragment>
        <Header/>
        <KSRIntro/>
        <KSRRoomFacility/>
        <Footer/>
    </Fragment>
  )
}

export default KingSizeRoom
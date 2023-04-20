import styled from "@emotion/styled";
import { Box, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card , Button, Tab } from "react-bootstrap";
import Footer from "../component/Footer";
import Header from "../component/Header";


import { Inter } from '@next/font/google'
import HomeIntro from "../component/Home/HomeIntro";
import HomeRoomStudio from "../component/Home/HomeRoomStudio";
import HomeRoomFacility from "../component/Home/HomeRoomFacility";
import HomeFitness from "../component/Home/HomeFitness";
import HomeMeeting from "../component/Home/HomeMeeting";
 

const Home = () => {

  
  return (
    <Fragment>
      
      <Header />
      <HomeIntro/>
      <HomeRoomStudio/>
      <HomeRoomFacility/>
      <HomeFitness/>
      <HomeMeeting/>
      
      
      <Footer/>
    </Fragment>
  );
};

export default Home;

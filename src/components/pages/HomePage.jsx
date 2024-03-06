import React from 'react'
import SliderHome from '../home/SliderHome'
import Welcome from '../home/Welcome'
import HomePageActivity from '../activity/HomePageActivity'
import AfterSlider from '../home/AfterSlider'
import SecondSlideHome from '../home/SecondSlideHome'
import HorizontalScroll from '../scroll/HorizontalScroll'

const HomePage = () => {
  return (
    <>
        <SliderHome />
        <Welcome />
        <HomePageActivity />
        <AfterSlider />
        <SecondSlideHome />
        <HorizontalScroll />
    </>
  )
}

export default HomePage
import React from 'react'
import Slider from '../components/slider.jsx'
import Top from '../components/top.jsx'
export default function home() {
  return (
    <div>
              <Top/>
              <img alt = "photo" src = "./Images/best.svg"></img>
        <Slider/>
    </div>
  )
}

import React from 'react'
import Carousel from '../carousel/Carousel'
export default function slider() {
    const slides = [
        "./Images/Alesis.jpeg",
        "./Images/AT2020.jpeg",
        "./Images/Fender.jpeg",
        "./Images/Ibanez.jpeg",
        "./Images/Taylor.webp",
        "./Images/GAMMA.webp",
    ]
  return (
    <div className='container'>
      <Carousel slides = {slides} />
    </div>
  )
}

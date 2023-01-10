import React from 'react'
import Carousel from '../carousel/Carousel'
export default function slider() {
    const slides = [
        "./Images/IbanezBass2.webp",
        "./Images/AT2020.jpeg",
        "./Images/IbanezBass.webp",
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

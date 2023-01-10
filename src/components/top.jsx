import React from 'react'

export default function top() {
  return (
    <div>
      <div>
        <img  class ="hero-img" alt = "hero" src = "./Images/hero-image.webp"></img>
      </div>
        <div className='topPros'>
               {/* Shipping */}
        <div class = "deals">
<i class="fa-solid fa-truck-fast " id = "contact-icon"></i>
        <p class = "buttonTitle"> Free Shipping</p>
        <p> Here at Ongaku we Guarantee free shipping on all purchases $100+</p>
        </div>
            {/* Money Back */}
            <div class = "deals">
            <i class="fa-solid fa-money-bill-transfer " id = "contact-icon"></i>
            <p class = "buttonTitle"> Money Back Guarantee</p> 
            <p> If you're dissatified with any of your purchases we'll return your money no strings attatched</p>

            </div >
            {/* Return */}
            <div class = "deals">
            <i class="fa-solid fa-hand-holding-heart " id = "contact-icon"></i>
            <p class = "buttonTitle"> 30 Day Return</p>
            <p> If you're dissatified with any of your purchases we'll allow you to return your purchase within 30 days no strings attatched</p>

            </div>
            {/* Custom Gear */}
            <div class = "deals">

            <i class="fa-solid fa-screwdriver-wrench" id = "contact-icon"></i>
            <p class = "buttonTitle"> Custom Gear</p>
            <p> Here at Ongaku we like to make sure our customers are satiesfied to the tea, Look on our contact page for more custom build information</p>
            </div>


        </div>
    </div>
  )
}

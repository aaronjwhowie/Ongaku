import React from 'react'
export default function contactTop() {
  return (
    <div class = "contactTop">
        {/* Shipping & Returns */}
        <div>
        <i class="fa-solid fa-box-open" id = "contact-icon"></i>
        <p class = "buttonTitle"> Packaging & Returns</p>
        <p class = "contactButton"> Learn More</p>
        </div>

{/* Warranty */}
        <div>
<i class="fa-solid fa-medal" id = "contact-icon"></i>   
        <p class = "buttonTitle"> Warranty</p>     
        <p class = "contactButton"> Learn More</p>
        </div>

        {/* Shipping */}
        <div>
<i class="fa-solid fa-truck-fast" id = "contact-icon"></i>
        <p class = "buttonTitle"> Delivery</p>
        <p class = "contactButton"> Learn More</p>

        </div>

                {/* Membership */}
        <div>
<i class="fa-solid fa-users" id = "contact-icon"></i>
        <p class = "buttonTitle"> Membership</p>
        <p class = "contactButton"> Learn More</p>

        </div>

                        {/* Account */}
        <div>
<i class="fa-sharp fa-solid fa-circle-user" id = "contact-icon"></i>
        <p class = "buttonTitle"> Account</p>
        <p class = "contactButton"> Learn More</p>

        </div>
           </div>
 
  )
}

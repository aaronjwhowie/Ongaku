import React from 'react';
import ContactImg from './contact.svg';
export default function contactForm() {
  return (
    <div>
              <div class = "contactArea">
      <div> 
      <h3 class = "leftSideC"> Not Enough Info?</h3>
      <img src={ContactImg} class = "gitIMG contactPhones" alt = "Guitar"/>
      </div>
        {/* -------- */}
        <h3 class = "rightSideC"> Contact Us Now!</h3>
        <div class = "contactForm contactPhones">
      <form>
        {/* -------- */}
        <input type = "text" placeholder='First Name' required></input>
        <br></br>
        <br></br>
        {/* -------- */}
        
        <input type = "text" placeholder='Last Name' required></input>
        <br></br>
        <br></br>
        {/* -------- */}
        
        <input type = "text" placeholder='Email' required></input>
        <br></br>
        <br></br>
        {/* -------- */}
        
        <input type = "text" placeholder='Phone Number' required></input>
        <br></br>
        <br></br>
        {/* -------- */}
        <br></br>
        <textarea placeholder='Comments & Concerns' required></textarea>
        <br></br>
        {/* -------- */}

  <input type = "submit" class ="submit" ></input>
      </form>
      {/*  */}
      </div>
      </div>
    </div>
  )
}

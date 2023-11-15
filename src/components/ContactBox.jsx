import React from 'react'
import visit from '@images/black-visit.png'
import call from '@images/blackcall.png'
import mail from '@images/blackmail.png'

const ContactBox = () => {
  return (
    <section class="about-box">
    <div class="container">
        <div class="info-boxes">
            <img src={visit} alt=""/>
            <div>
                <h3>Visit us</h3>
                <p>Sveavägen 31</p>
                <p>111 34 STOCKHOLM</p>
            </div>
        </div>
        <div class="info-boxes">
            <img src={call} alt=""/>
            <div>
                <h3>Call us</h3>
                <p>+46 (8) 121 470 50</p>
                <p>+46 (8) 121 470 51</p>
            </div>
        </div>
        <div class="info-boxes">
            <img src={mail} alt=""/>
            <div>
                <h3>Email us</h3>
                <p>info@crito.com</p>
                <p>support@crito.com</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactBox
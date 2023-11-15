import React from 'react'

const Contactform = () => {
  return (
    <section class="contact-form">
    <div class="container">
        <div class="text-container">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
        </div>
        <div class="details">
        <form method="post"/>
            <div>
                <input type="text" name="name" id="name" placeholder="Name*" tabindex="1"/>
            </div>
            <div>
                <input type="text" name="email" id="email" placeholder="Email*" tabindex="2"/>
            </div>
            <div>
                <textarea name="message" id="message" cols="30" rows="15" placeholder="Your Message..." tabindex="3"></textarea>
            </div>
            <div>
                <button type="submit" class="btn-yellow" >send message<i class="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contactform
import React from 'react'

const SignUpNews = () => {
  return (
    <section className="newsletter">
    <img className="Background-wavy-lines" src="assets/images/background-wavy-lines.svg" alt=""/>
    <div className="container">
        <h2> Join Us for Exclusive News Updates</h2>
        <form>
            <input type="text" placeholder="Your email adress.."/>
            <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
        </form>
    </div>
</section>
  )
}

export default SignUpNews
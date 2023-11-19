import React from 'react'
import backgroudlines from '@images/background-lines.svg'

const Connect = () => {
  return (
    <section className="connect-section">
            
    <div className="container">
        <div className="connect-links">
            <a href="index.html">Home</a>
            <a className="active" href="/">News</a>
        </div>
        
        <div className="News">
            <h1>News & Articles</h1>
        </div>
        <div className="background-lines">
            <img src={backgroudlines} alt="Showcase image" className="Background-lines-right"/>
        </div>
    </div>
</section>
  )
}

export default Connect
import React from 'react'
import notes from '@images/notes.png'
import glasswatch from '@images/glasswatch.png'
import business from '@images/buisness.png'
import macstats from '@images/macstats.png'

const ProjectCases = () => {
  return (
    <section className="project-section">
    <div className="container">
        <div className="section-title-p">
            <p>Project & Case Studies</p>
            <h2>Let's Look Our Global Projects</h2>
        </div>
        <div className="project-cases">
            <article>
                <a className="project" href="#">
                    <img src={business} alt="A man reading a business paper"/>
                    <h3>Grow your Business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i> </div>
                </a>
            </article>
            <article>
                <a className="project" href="#">
                    <img src={glasswatch} alt="Pink apple products"/>
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i> </div>
                </a>
            </article>
            <article>
                <a className="project" href="#">
                    <img src={notes} alt="Desk with office supplies"/>
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i> </div>
                </a>
            </article>
            <article>
                <a className="project" href="#">
                    <img src={macstats} alt="Laptop with business stats"/>
                    <h3>Business Insights is an important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i> </div>
                </a>
            </article>
        </div>
        <div className="center-content">
            <a className="btn-black" href="Projects.html">All Recent Projects <i
                    className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default ProjectCases
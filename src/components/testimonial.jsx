import React from 'react';
import Stars from '@images/stars.svg'
import tulling from '@images/tulling.svg'
import warren from '@images/warren.svg'
import mcdogglas from '@images/mcdogglas.svg'

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="section-title">
          <p>Testimonial</p>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="Cards-container">
          <div className="card-reviews">
            <div className="review">
              <img src={Stars} alt="Star" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magni, natus illum sapiente quod debitis accusamus expedita exercitationem ullam quasi, sint est aut vitae facere quis reprehenderit unde placeat facilis.
              </p>
            </div>

            <div className="review">
            <img src={Stars} alt="Star" />
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magni, natus illum sapiente quod debitis accusamus expedita exercitationem ullam quasi, sint est aut vitae facere quis reprehenderit unde placeat facilis."
              </p>
            </div>

            <div className="review">
            <img src={Stars} alt="Star" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magni, natus illum sapiente quod debitis accusamus expedita exercitationem ullam quasi, sint est aut vitae facere quis reprehenderit unde placeat facilis.
              </p>
            </div>
          </div>
        </div>
        <div className="card-names-container">
          <div className="card-names">
            <img src={warren} alt="Cassandra Warren" />
            <div>
              <h3>Cassandra Warren</h3>
              <p>Business Manager, Dorfus</p>
            </div>
          </div>

          <div className="card-names">
            <img src={tulling} alt="Amanda Tulling" />
            <div>
              <h3>Amanda Tulling</h3>
              <p>Senior Developer, Square</p>
            </div>
          </div>

          <div className="card-names">
            <img src={mcdogglas} alt="Jack McDogglas" />
            <div>
              <h3>Jack McDogglas</h3>
              <p>Key Account Manager, Gobona</p>
            </div>
          </div>
        </div>
        <div className="center-content">
          <a className="btn-black" href="#">
            All Reviews <i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

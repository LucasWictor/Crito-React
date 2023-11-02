import React from 'react'

const Servicebox = ({title, description, url}) => {
  return (
    <div className="single-box">
                        <div className="img-text">
                            <h2>__</h2>
                            <span className="header-text">{title}</span>
                            <p>{description}</p>
                            <div className="j"> <a className="roundbutton" href={url}>
                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                </a></div>
                        </div>
                    </div>
  )
}

export default Servicebox
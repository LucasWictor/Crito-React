import React from 'react'
import Brand1 from '@images/paperz.svg'
import Brand2 from '@images/Martino.svg'
import Brand3 from '@images/Square.svg'
import Brand4 from '@images/Gobona.svg'

const Brands = () => {
  return (
     <div class="brands container">
            <div className="Brand1"> <img src={Brand1} alt="Paperz company logotype" /></div>
            <div class="photo"> <img src={Brand2} alt="Martino company logotype"/></div>
            <div class="photo"> <img src={Brand3} alt="Square company logotype"/></div>
            <div class="photo"> <img src={Brand4} alt="Gobona company logotype"/></div>
        </div>

  )
}

export default Brands
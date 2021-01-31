import React from 'react'
import img1 from './DSC_0857.jpg'
import img2 from './DSC_0865.jpg'
import img3 from './DSC_0871.jpg'

export const Cases = () => (
  <section id="cases" className="cases flex-grid section-padding">
    <header className="section-header">
      <h4>Чим ми займаємося</h4>
      <h2>Тренування і ще раз тренування</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        dolore!
      </p>
    </header>
    <div className="row">
      <div className="column">
        <a
          href={img1}
          data-lightbox="cases"
          data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
        >
          <img src={img1} alt=""/>
        </a>
      </div>

      <div className="column">
        <a
          href={img2}
          data-lightbox="cases"
          data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
        >
          <img src={img2} alt=""/>
        </a>
      </div>

      <div className="column">
        <a
          href={img3}
          data-lightbox="cases"
          data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
        >
          <img src={img3} alt=""/>
        </a>
      </div>
    </div>
  </section>
)
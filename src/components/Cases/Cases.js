import React from 'react'
import img1 from './DSC_0857.jpg'
import img2 from './DSC_0865.jpg'
import img3 from './DSC_0871.jpg'

export const Cases = () => (
  <section id="cases" className="cases flex-grid section-padding">
    <header className="section-header">
      <h2 style={{ marginBottom: 0 }}>ТРЕНУВАННЯ</h2>
      <p>і не тільки</p>
      <p>
        В 2019 році <span>ramavandama</span> створювався як блог про спорт і самодосконалення.
        Сьогодні ж це ціла філософія, бренд. Ми постійно розвиваємося і створюємо щось нове.
        Слідкуйте за новинами щоб не пропустити найцікавіше.
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
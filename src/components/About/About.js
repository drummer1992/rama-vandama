import React from 'react'
import scheduleImg from './DSC_2786.jpg'

const Icon = ({ className, style }) => (
  <i
    style={{
      backgroundColor: '#004aad',
      color          : '#fbd856',
      ...(style || {})
    }}
    className={className}
  />
)

export const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="icons bg-light">
        <div className="flex-items">
          <div>
            <Icon className="fas fa-heart fa-2x"/>
            <div>
              <h3>Здоровий спосіб життя</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <Icon
              style={{ width: 65 }}
              className="fas fa-running fa-2x"
            />
            <div>
              <h3>В здоровому тілі здоровий дух</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <Icon className="fas fa-dumbbell fa-2x"/>
            <div>
              <h3>Спорт - ліки від поганого настрою</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solutions flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src={scheduleImg} alt=""/>
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-secondary">
              <h2 className="text-primary">Ми зробимо з тебе людину</h2>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-chevron"/>
                Записатися на тренування
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
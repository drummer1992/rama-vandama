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
                Відчутне покращення самопочуття та загального стану організму вже після третього тренування.
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
                Це не просто гарні слова. Записуйтесь на безкоштовне пробне тренування і відчуйте ефект на собі.
              </p>
            </div>
          </div>
          <div>
            <Icon className="fas fa-dumbbell fa-2x"/>
            <div>
              <h3>Спорт - ліки від поганого настрою</h3>
              <p>
                Дикий заряд позитивних емоцій, дружня підтримка та допомога, персональний підхід до кожного.
                Все це і набагато більше на групових заняттях.
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
              <h2 className="text-primary">Професійний підхід до тренувань</h2>
              <p className="text-primary">
                Сертифікований тренер з багаторічним досвідом вдало підбере програму тренувань, яка підходить саме тобі.
              </p>
              <p className="text-primary">
                Постійний контроль за правильністю виконання вправ, дозволить досягнути результатів в найкоротший період без шкоди для здоров'я.
              </p>
              <p className="text-primary">
                Записуйся на тренування - почни змінювати своє життя на краще вже сьогодні.
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
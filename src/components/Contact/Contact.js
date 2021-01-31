import React, { useState } from 'react'
import img from './contact.jpg'

const url = 'http://localhost:9000/'

const validator = {
  name   : {
    validate: value => value && value.trim(),
    message : 'Необхідно заповнити ім`я'
  },
  email  : {
    validate: value => /\S+@\S+\.\S+/.test(value),
    message : 'Не корректний імейл',
  },
  message: {
    validate: value => value && value.length >= 10,
    message : 'Повідомлення повинно містити мінімум 10 символів'
  }
}

const initialState = {
  name   : '',
  email  : '',
  message: '',
}

export const Contact = () => {
  const [inputs, setInputs] = useState(initialState)

  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  const inputHandler = (field) => e => {
    setInputs(prevState => ({ ...prevState, [field]: e.target.value }))
    error && setError('')
    info && setInfo('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let error

    Object.keys(validator).reverse().forEach(input => {
      const isValid = validator[input].validate(inputs[input])

      if (!isValid) {
        error = validator[input].message
      }
    })

    if (error) {
      return setError(error)
    }

    window.fetch(url, {
      method : 'POST',
      body   : JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(r => r instanceof Response ? r.json() : r)
      .then(r => {
        if ([400, 500].includes(r.status)) {
          return setError(r.message)
        }

        setInfo('Повідомлення успішно відправлено')
        setInputs(initialState)
      })
      .catch(e => setError(e.message))
  }

  return (
    <section id="contact" className="contact flex-columns">
      <div className="row">
        <div className="column">
          <div className="column-1">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="column-2 bg-light">
            <h2>Записатися на тренування</h2>
            <form action="" className="callback-form">
              <div className="form-control">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Введіть ім'я"
                  value={inputs.name}
                  onChange={inputHandler('name')}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Введіть email"
                  value={inputs.email}
                  onChange={inputHandler('email')}
                />
              </div>
              <div className="form-control">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Введіть повідомлення..."
                  value={inputs.message}
                  onChange={inputHandler('message')}
                />
              </div>
              <div style={{ height: 20, overflow: 'hidden' }}>
                {error ? <h5 style={{ color: 'red' }}>{error}</h5> : null}
                {info ? <h5>{info}</h5> : null}
              </div>
              <input
                type="submit"
                value="Відправити"
                id="submit"
                className="btn"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
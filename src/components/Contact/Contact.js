import React, { useState } from 'react'
import img from './contact.jpg'

const url = process.env.REACT_APP_SERVER_URL

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message)
  }
}

const errorPicker = fn => (...params) => {
  try {
    fn(...params)
  } catch (e) {
    return e.message
  }
}

const nameValidator = errorPicker(state => {
  assert(state.name && state.name.trim(), 'Необхідно заповнити ім`я')
})

const emailValidator = errorPicker(state => {
  if (state.email) {
    assert(/\S+@\S+\.\S+/.test(state.email), 'Не корректний імейл')
  } else {
    assert(state.phone, 'Телефон або email обовязковий для заповнення')
  }
})

const phoneValidator = errorPicker(state => {
  if (state.phone) {
    assert(/[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}/.test(state.phone), 'Не корректний телефон')
  } else {
    assert(state.email, 'Телефон або email обовязковий для заповнення')
  }
})

const messageValidator = errorPicker(state => {
  assert(state.message && state.message.length >= 10, 'Повідомлення повинно містити мінімум 10 символів')
})

const validators = [
  nameValidator,
  emailValidator,
  phoneValidator,
  messageValidator,
]


const initialState = {
  name    : '',
  email   : '',
  message : '',
  phone   : '',
  schedule: '',
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

    const error = validators
      .map(validate => validate(inputs))
      .find(msg => Boolean(msg))

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
                  placeholder="Ім'я"
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
                  placeholder="Email"
                  value={inputs.email}
                  onChange={inputHandler('email')}
                />
              </div>
              <div className="form-control">
                <label htmlFor="phone"></label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Номер телефону"
                  value={inputs.phone}
                  onChange={inputHandler('phone')}
                />
              </div>
              <div className="form-control">
                <label htmlFor="schedule"></label>
                <input
                  type="text"
                  name="schedule"
                  id="schedule"
                  placeholder="Зручні дні і години для тренувань"
                  value={inputs.schedule}
                  onChange={inputHandler('schedule')}
                />
              </div>
              <div className="form-control">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Повідомлення"
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
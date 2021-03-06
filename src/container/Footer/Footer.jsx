import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss';

const Contacto = () => {
  const [fromData, setFromData] = useState({name: '', email: '', message: ''});
  const [isFromSubmited, setIsFromSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = fromData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFromData({...fromData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() =>{
      setLoading(false);
      setIsFromSubmited(true);
    })

  }

  return (
    <>
    <h2 className="head-text">Contacta conmigo</h2>


    <div className="app__footer-cards">
      <div className="app__footer-card">
      <img src={images.outlook} alt="email"/>
      <a href="mailto:manuelperezp22@hotmail.com" className="p-text">manuelperezp22@hotmail.com</a>
      </div>
      <div className="app__footer-card">
      <img src={images.mobile} alt="mobile"/>
      <a href="tel:+1 (809) 481-3489" className="p-text">+1 (809) 481-3489</a>
      </div>
      <div className="app__footer-card">
      <img src={images.cvu} alt="cvu"/>
      <a href="https://drive.google.com/file/d/1ReZTtUhR3jyzii4LFnKw8bbQPqT69sC-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-text">Curriculum Vitae
      </a>
      </div>
    </div>

    {/*Confirmacion para saber si el mensaje fue enviado*/}
    {!isFromSubmited ?
    ////////////////
    <div className="app__footer-form app__flex">
      <div className="app__flex">
      <input className="p-text" type="text" placeholder="Nombre" name="name" value={name} onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
      <input className="p-text" type="email" placeholder="Email (Obligatorio)" name="email" value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea 
        className="p-text"
        placeholder = "Mensaje"
        value={message}
        name="message"
        onChange={handleChangeInput}
        />
      </div>
      <button type="button" className="p-text" disabled={!email} onClick={handleSubmit}>{!loading ? 'Enviar Mensaje' : 'Enviando...'}</button>
    </div>
    : <div>
      <h3 className="head-text">Gracias por contactar!</h3>
      {/*Si se envio correctamente se dispara este mensaje*/}
    </div>}
    </>
  )
}


export default AppWrap(
  MotionWrap(Contacto, 'app__footer'),
  'Contacto',
  'app__whitebg',
);
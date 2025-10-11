import React, { useState } from 'react';
import '../styles/Contacto.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="text-white">

        <div className="text-center" id='Contacto'>
            <h2>Contacto</h2>
            <div className='mb-3'>
                <p>Nombre:</p>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='w-15'
                />
            </div>
            <div className='mb-3'>
                <p>Correo:</p>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-15'
                />
            </div>
            <div className='mb-3'>
                <p>Mensaje:</p>
                <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className='w-15 p-4'></textarea>
            </div>
            
            <button className="btn btn-primary">Enviar</button>
            
      </div>
    </form>
  );
}

export default ContactForm;
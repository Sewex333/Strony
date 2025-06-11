import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import "../Form.css"
import axios from 'axios'
import emailjs from 'emailjs-com';

const Form = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [b_date, SetB_date] = useState('');
  const [nr_tel, setNr_tel] = useState('');
  const [mail, setMail] = useState('');
  const [info, setInfo] = useState('');

  const form = useRef();  


  const handleForm = (event) => {
    event.preventDefault();
    console.log(name,surname,b_date,nr_tel,mail,info);
    emailjs.sendForm("service_wy21u3d", "template_wabyhgk", form.current, 'XKBdsBjZTnh66Riss')
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
      fetch('http://localhost:8000/api/data', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imie: name,
        nazwisko: surname,
        dataUrodzenia: b_date,
        Numer_Telefonu: nr_tel,
        e_mail: mail,
        Informacje_Dodatkowe: info
      })
    })
    console.log(name, surname);
  }
  

  return (
    <div className='container'>
      <div className='formik'>
        <h1>Strefa Zawodnika</h1>
        <form ref={form} onSubmit={handleForm}>
        <label className='label'>
          podaj imie:
          <input
          type="text"
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
         />
        </label>
        <br />
        <label className='label'>
          Podaj nazwisko
          <input 
          type="text"
          name='nazwisko'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required/>
        </label>
        <br />
        <label className='label'>podaj date Date Urodzenia
          <input 
          type="date"
          name='data'
          value={b_date}
          onChange={(e) => SetB_date(e.target.value)}
          required
        />
        </label>
        <br />
        <label className='label'>
          Podaj numer Telefonu
          <input type="tel" name='numer' value={nr_tel} onChange={(e) => setNr_tel(e.target.value)} pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}' placeholder='000-000-000' required/>
        </label>
        <br />
        <label className='label'>
          Podaj email
          <input 
            type="email"
            value={mail}
            name='mail'
            onChange={(e) => setMail(e.target.value)}
            required
           />
        </label>
        <br />
        <label className='label'>Podaj informacje o sobie</label>
        <br />
          <textarea 
            name="message" 
            id=""
            value={info}
            onChange={(e) => setInfo(e.target.value)}>Tutaj podaj info o sobie qtasie</textarea>
        <br />
        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default Form

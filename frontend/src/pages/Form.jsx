import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import "../Form.css"
import axios from 'axios'
import emailjs from 'emailjs-com';

const Form = () => {

  const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  const [b_date, SetB_date] = useState('');
  const [nr_tel, setNr_tel] = useState('');
  const [mail, setMail] = useState('');
  const [info, setInfo] = useState('');

  const form = useRef();  


  const handleForm = (event) => {
    event.preventDefault();
    // console.log(name,surname,b_date,nr_tel,mail,info);
    console.log(name,b_date,nr_tel,mail,info);
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
        // nazwisko: surname,
        dataUrodzenia: b_date,
        Numer_Telefonu: nr_tel,
        e_mail: mail,
        Informacje_Dodatkowe: info
      })
    })
    console.log(name);
    // console.log(name, surname);
  }
  
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">

        <h1 id="Ftekst">Formularz zgłoszeniowy - wypełnia zawodnik</h1>

        <form ref={form} onSubmit={handleForm} className='max-w-sm mx-auto'>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          podaj Imie i Nazwisko:
          <input
          type="text"
          name='name'
          value={name}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={(e) => setName(e.target.value)}
          required
         />
        </label>
        </div>
        <div className='mb-5'>
        {/* <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj nazwisko
          <input 
          type="text"
          name='nazwisko'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required/>
        </label> */}
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          podaj date Date Urodzenia
          <input 
          type="date"
          name='data'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={b_date}
          onChange={(e) => SetB_date(e.target.value)}
          required
        />
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj numer Telefonu
          <input type="tel" name='numer' value={nr_tel} onChange={(e) => setNr_tel(e.target.value)} pattern='[0-9]{9}' placeholder='000-000-000' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required/>
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj email
          <input 
            type="email"
            value={mail}
            name='mail'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => setMail(e.target.value)}
            required
           />
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Podaj informacje o sobie</label>
          <textarea 
            name="message" 
            id=""
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={info}
            onChange={(e) => setInfo(e.target.value)}>Tutaj podaj info o sobie qtasie</textarea>
            </div>
        <br />
        <input type="submit"value="Wyślij" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full mt-4 cursor-pointer transition"
        />
      </form>
      </div>

      <div className="w-full max-w-md ml-40 p-8 bg-white rounded-xl shadow-lg">

        <h1 id="Ftekst">Formularz zgłoszeniowy - wypełnia rodzic</h1>
          


        <form ref={form} onSubmit={handleForm} className='max-w-sm mx-auto'>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          podaj Imie i Nazwisko:
          <input
          type="text"
          name='name'
          value={name}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={(e) => setName(e.target.value)}
          required
         />
        </label>
        </div>
        <div className='mb-5'>
        {/* <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj nazwisko
          <input 
          type="text"
          name='nazwisko'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required/>
        </label> */}
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          podaj date Date Urodzenia
          <input 
          type="date"
          name='data'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={b_date}
          onChange={(e) => SetB_date(e.target.value)}
          required
        />
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj numer Telefonu
          <input type="tel" name='numer' value={nr_tel} onChange={(e) => setNr_tel(e.target.value)} pattern='[0-9]{9}' placeholder='000-000-000' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required/>
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Podaj email
          <input 
            type="email"
            value={mail}
            name='mail'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => setMail(e.target.value)}
            required
           />
        </label>
        </div>
        <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Podaj informacje o sobie</label>
          <textarea 
            name="message" 
            id=""
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={info}
            onChange={(e) => setInfo(e.target.value)}>Tutaj podaj info o sobie qtasie</textarea>
            </div>
        <br />
        <input type="submit"value="Wyślij" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full mt-4 cursor-pointer transition"
        />
      </form>
      </div>
    </div>
  )
}

export default Form

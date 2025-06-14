import React, {useEffect, useState} from 'react'

const Footer = () => {

    const [email, setEmail] = useState('');
    const [wiadomosc, setWiadomosc] = useState('');

  return (
    <section className='w-screen h-50 bg-black'>
        <img src="logotyp.png" alt="logotyp" />

    </section>
  )
}

export default Footer;
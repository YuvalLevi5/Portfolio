import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sjtglx4', 'template_eqzwdzs', form.current, 'n6DBbMv4gnXjPc79q')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='hash' id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>Yuvallevi0950@gmail.com</h5>
            <a href="mailto:Yuvallevi0950@gmail.com" traget="_blank">Send a message</a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/yuvallevi19" traget="_blank">Send a message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=0544443736" traget="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

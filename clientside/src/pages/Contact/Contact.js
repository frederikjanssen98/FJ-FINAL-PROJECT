import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './Contact.css'

function Contact() {
  return (
    <>
    <Navbar/>
    <section className='contactcontainer'>
      <section className='contactdata'>
        <div className='picture'>
          <img src='https://media-exp1.licdn.com/dms/image/C5603AQHtrFdeSucsCA/profile-displayphoto-shrink_200_200/0/1655216804464?e=1661385600&v=beta&t=fD_hqKf75KsU9EIBbGXsrPdeqJqDq39sy79Q7FbPVqg'/>
        </div>
        <div className='contact'>
          <p>Is there something you want to tell me? Can I help you with something? Would you like to work with me? 
Just send me an email or give me a call.<br/><br/>
<p>Tel: 017657725609</p><p>Mail: frederik.janssen98@gmx.de</p></p>
        </div>
      </section>
    </section>
    </>
  )
}

export default Contact;
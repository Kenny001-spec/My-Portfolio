'use client'
import React from 'react'
import styles from "../styles/Contact.module.css"
const Contact = () => {
 
  
  return (
    <div className={styles.contactW} id='contact'>
        <p className='text-primary1 text-[13px]'><span className='text-primary1'></span> What comes next?</p>
        <h1 className='text-[2rem] font-bold text-var_color'>Get In Touch</h1>
        <p className ='lg:w-[60%] text-center'
           data-aos="flip-up"
        
        >{"I'm enthusiastic about the opportunity to collaborate on developing outstanding web experiences that surpass expectations. If you're open to exploring a partnership or discussing potential projects, Please inform me if you'd like to schedule a call or if there's any other information I can offer. Thank you!😊"}</p>
       <a href="https://api.whatsapp.com/send?phone=2349135619423&text=Hello%20I%20will%20like%20to%20Hire%20You" target='_blank' rel="noopener noreferrer" data-aos="fade-up"><p className={styles.sayHello}></p></a>
        
    </div>
  )
}

export default Contact

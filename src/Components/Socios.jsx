'use client'
import React, { useEffect } from 'react'
import styles from "../styles/Socios.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css';
const Socios = () => {
  const socioArr = [
    {
      link: "https://github.com/Kenny001-spec",
      ima1 : `bg-[url("/github-line.png")]`,
      ima2 : `hover:bg-[url("/github-lineh.png")]`,
      alter : 'Github icon'
      
    },
    {
      link: "https://twitter.com/kennySpec",
      ima1 : `bg-[url("/twitter-line.png")]`,
      ima2 : `hover:bg-[url("/twitter-lineh.png")]`,
      alter : "Twitter icon"
    },
    {
      link: "https://www.linkedin.com/in/kehinde-abubakar-029223252/",
      ima1 : `bg-[url("/linkedin-fill.png")]`,
      ima2 : `hover:bg-[url("/linkedin-fillh.png")]`,
      alter : "Linkedin icon"
      
    },
    {
      link: "https://www.instagram.com/kennyx55/",
      ima1 : `bg-[url("/instagram-line.png")]`,
      ima2 : `hover:bg-[url("/instagram-lineh.png")]`,
      alter : "Instagram icon"
      
    },
  ]

  return (
           <div className={styles.soicioAccounts}>
            <div className={styles.soicioAccountsL}>
              {
                socioArr.map((so,i)=>(
             <a href={so.link} target='_blank' rel="noopener noreferrer"
             key={i}
             
             >
            <div className={` ${so.ima1} ${so.ima2} w-6 h-6 gird place-content-center`}>
                  </div>
                   </a>
                ))
              }
            
            <p></p>
            </div>
            <div className={styles.soicioAccountsR}>
           <a href="mailto:abubakarkehinde88@gmail.com?subject=Hi%20Kehinde&body=" target='_blank' rel="noopener noreferrer"><span
          x
           > abubakarkehinde@gmail.com</span></a>
           <p></p>
        </div>
        </div>
       
        
   
  )
}

export default Socios

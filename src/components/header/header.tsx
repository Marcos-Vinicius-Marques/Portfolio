import styles from './stylesheader.module.css'

import { useState, useEffect } from "react"
import poweredImage from '../../assets/images/portfolio.jpg'
import linkedin from '../../assets/icons/linkedin1.png'
import github from '../../assets/icons/github3.png'
import instagram from '../../assets/icons/instagram1.png'
import facebook from '../../assets/icons/facebook3.png'


export const Header = () => {
    const [menuFixed, setMenuFixed] = useState(false)

  useEffect( () => {
    function scrollPosition() {
      if (window.scrollY > 534){
        setMenuFixed(true)
      } else {
        setMenuFixed(false)
      }
    }
    window.addEventListener('scroll', scrollPosition)
  }, []) 

  return (
    <>
        <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.image}>
            <img src={poweredImage} alt='Imagem do portfólio' />
          </div>
          <div className={styles.headerName}>
            <div className={styles.spacingName}>
              <span className={styles.styleWords}>Marcos </span>
              <span className={styles.styleWords}>Vinicius </span>
              <span className={styles.styleWords}>Oliveira  </span>
              <span className={styles.styleWords}>Marques</span>
            </div>
          </div>
          <div className={styles.mainsNetworks}>
            <nav>
              <a href="https://www.linkedin.com/in/marcos-vin%C3%ADcius-marques-a2b300184/" target="_blank">  
                <div className={styles.linkedinBackground}>
                  <img className={styles.linkedin} src={linkedin} alt="Linkedin" />
                </div>
              </a>
              <a href="https://github.com/Marcos-Vinicius-Marques" target="_blank"> 
                <div className={styles.githubBackground}>
                  <img className={styles.github} src={github} alt="GitHub" />
                </div>
              </a>
              <a href="https://www.instagram.com/vinicius.marquesvn/" target="_blank"> 
                <div className={styles.instagramBackground}>
                  <img className={styles.instagram} src={instagram} alt="Instagram" />
                </div>
              </a>
              <a href="https://www.facebook.com/vinicius.marques.75491/" target="_blank">   
                <div className={styles.facebookBackground}>
                  <img className={styles.facebook} src={facebook} alt="Facebook" />
                </div>
              </a>
            </nav>
          </div>
        </div> 
        <div className={styles.headerBottom}>
          <div className={menuFixed ? styles.menuFixedTrue : styles.menuFixedFalse}>
            <nav>  
              <ul>
                <li>HOME</li>
                <li>SOBRE</li>
                <li>HABILIDADES</li>
                <li>PROJETOS</li>
                <li>CONTATO</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
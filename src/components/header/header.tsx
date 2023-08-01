import styles from './stylesheader.module.css'
import { Link as Scroll} from "react-scroll";

import { useState, useEffect } from "react"
import poweredImage from '../../assets/images/portfolio.jpg'
import linkedin from '../../assets/icons/linkedin1.png'
import github from '../../assets/icons/github3.png'
import instagram from '../../assets/icons/instagram1.png'
import facebook from '../../assets/icons/facebook3.png'


export const Header = () => {
  const [menuFixed, setMenuFixed] = useState(false)

  useEffect(() => {
    function scrollPosition() {
      if (window.scrollY > 534) {
        setMenuFixed(true)
      } else {
        setMenuFixed(false)
      }
    }
    window.addEventListener('scroll', scrollPosition)
  }, [])




  const [colorHome, setColorHome] = useState(false)
  const changeColorHeader = () => {
    if (window.scrollY >= 0 && window.scrollY <= 350) {
      setColorHome(true)
    } else {
      setColorHome(false)
    }
  }
  window.addEventListener('scroll', changeColorHeader)

  const [colorSobre, setColorSobre] = useState(false)
  const changeColorSobre = () => {
    if (window.scrollY >= 351 && window.scrollY <= 820) {
      setColorSobre(true)
    } else {
      setColorSobre(false)
    }
  }
  window.addEventListener('scroll', changeColorSobre)

  const [colorHabilidades, setColorHabilidades] = useState(false)
  const changeColorHabilidades = () => {
    if (window.scrollY >= 821 && window.scrollY <= 1450) {
      setColorHabilidades(true)
    } else {
      setColorHabilidades(false)
    }
  }
  window.addEventListener('scroll', changeColorHabilidades)

  const [colorProjetos, setColorProjetos] = useState(false)
  const changeColorProjetos = () => {
    if (window.scrollY >= 1451 && window.scrollY <= 1900) {
      setColorProjetos(true)
    } else {
      setColorProjetos(false)
    }
  }
  window.addEventListener('scroll', changeColorProjetos)

  const [colorContato, setColorContato] = useState(false)
  const changeColorContato = () => {
    if (window.scrollY >= 1901 && window.scrollY <= 2400) {
      setColorContato(true)
    } else {
      setColorContato(false)
    }
  }
  window.addEventListener('scroll', changeColorContato)




  return (
    <>
      <header id="home" className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.image}>
            <img src={poweredImage} alt='Imagem do portfólio' />
          </div>
          <div className={styles.headerName}>
            <div className={styles.spacingName}>
              <span className={styles.styleWords}>Marcos </span>
              <span className={styles.styleWords}>Vinícius </span>
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
                <Scroll
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >

                    <li className={colorHome ? styles.active : styles.liStyle}>HOME</li>
                </Scroll>

                <Scroll
                  to="sobre"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >
                    <li className={colorSobre ? styles.active : styles.liStyle}>SOBRE</li>
                </Scroll>

                <Scroll
                  to="habilidades"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                >
                    <li className={colorHabilidades ? styles.active : styles.liStyle}>HABILIDADES</li>
                </Scroll>

                <Scroll
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >
                    <li className={colorProjetos ? styles.active : styles.liStyle}>PROJETOS</li>
                </Scroll>

                <Scroll
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >
                    <li className={colorContato ? styles.active : styles.liStyle}>CONTATO</li>
                </Scroll>
                
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
import styles from './stylesfooter.module.css'


import carta from '../../assets/icons/carta.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import linkedin from '../../assets/icons/linkedin1.png'
import github from '../../assets/icons/github3.png'
import instagram from '../../assets/icons/instagram1.png'
import facebook from '../../assets/icons/facebook3.png'


export const Footer = () => {
    return (
        <>
            <footer id='contato'>
                <h1>
                    Contato
                </h1>
                <div className={styles.contactArea}>
                    <div className={styles.contact}>
                        <a href="mailto:mviniciusmarquesvk@hotmail.com" target="_blank">
                            <div className={styles.cartaBackground}>
                                <img className={styles.carta} src={carta} alt="Linkedin" />
                            </div>
                        </a>
                        <div className={styles.email}>E-MAIL:</div>
                        <a href="mailto:mviniciusmarquesvk@hotmail.com" target="_blank" className={styles.fontFooter}>mviniciusmarquesvk@hotmail.com</a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://wa.me/+5522992520776" target="_blank">
                            <div className={styles.whatsappBackground}>
                                <img className={styles.whatsapp} src={whatsapp} alt="Linkedin" />
                            </div>
                        </a>
                        <div className={styles.whatsappText}>WHATSAPP:</div>
                        <a href="https://wa.me/+5522992520776" target="_blank" className={styles.fontFooter}>(22) 99252-0776</a>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.contactNetwork}>
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
                    </div>
                </div>
            </footer>
        </>
    )
}
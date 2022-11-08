import styles from './stylesbody.module.css'

import { TransitionSquare } from '../transition-square/TransitionSquare'
import { TransitionRectangle } from '../transition-rectangle/TransitionRectangle'
import { Slider } from '../slider/Slider'
import github from '../../assets/icons/github3.png'



export const Body = () => {


    return (
        <>
            <main>
                <div className={styles.container}>
                    <TransitionSquare />
                    <TransitionRectangle />
                    <TransitionSquare />
                    <TransitionRectangle />
                    <div className={styles.modelTablet}>
                        <TransitionSquare />
                    </div>

                    <div className={styles.containerSection}>
                        <section id='sobre'>
                            <h1>Sobre</h1>
                            <p>
                                Tenho 22 anos, sou de Macaé, Rio de Janeiro. Estou estudando programação web
                                desde fevereiro de 2022 no curso técnico da <a href="https://b7web.com.br/fullstack/?gclid=CjwKCAjw2OiaBhBSEiwAh2ZSPyVNFC6pyIcCnN7RotlMXeEBgHAjmCTiBioE9pW2SSXE18MtyyCwaBoCyBkQAvD_BwE&ref=I24108426I" target='_blank'>
                                B7Web</a>. Enquanto estudo e me aprofundo em ferramentas Front-end busco uma oportunidade para começar no mercado de trabalho como um desenvolvedor Front-end Trainee ou Júnior.<br />
                                Me sinto muito entusiasmado a cada dia que se passa conhecendo o mundo do desenvolvimento web, principalmente
                                na área do Front-end. Estou totalmente disposto a aprender novas tecnologias dependendo da necessidade
                                do trabalho.
                            </p>
                        </section>
                        <section id='habilidades'>
                            <h1>Habilidades</h1>
                            <div className={styles.swiperArea}>
                                <Slider />
                            </div>
                        </section>
                        <section id='projetos'>
                            <h1>Projetos</h1>
                            <div className={styles.projectsArea}>
                                <p>
                                    Todos os meus projetos atuais podem ser encontrados no meu perfil do GitHub: <br />
                                    <div className={styles.linkArea}>
                                        <div>
                                            <a href="https://github.com/Marcos-Vinicius-Marques" target="_blank">
                                                <div className={styles.githubBackground}>
                                                    <img className={styles.github} src={github} alt="GitHub" />
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/Marcos-Vinicius-Marques" target="_blank">https://github.com/Marcos-Vinicius-Marques</a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
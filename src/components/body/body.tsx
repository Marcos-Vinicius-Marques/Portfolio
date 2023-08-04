import styles from './stylesbody.module.css'

import { TransitionSquare } from '../transition-square/TransitionSquare'
import { TransitionRectangle } from '../transition-rectangle/TransitionRectangle'
import { Slider } from '../slider/Slider'
import { SliderProjects } from '../sliderProjects/SliderProjects'
import github from '../../assets/icons/github3.png'
import marcos from '../../assets/documents/CVMarcosViníciusOliveiraMarques.pdf'



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
                    <TransitionRectangle />

                    <div className={styles.containerSection}>

                        <section id='sobre'>
                            <h1>Sobre</h1>
                            <p>
                                Tenho 23 anos, sou de Macaé, Rio de Janeiro. Estou estudando programação web
                                desde fevereiro de 2022. Enquanto estudo e me aprofundo em ferramentas Front-end busco uma oportunidade para começar no mercado de trabalho
                                como um desenvolvedor Front-end Trainee ou Júnior.<br />
                                Me sinto muito entusiasmado a cada dia que se passa conhecendo o mundo do desenvolvimento web, principalmente
                                na área do Front-end. Estou totalmente disposto a aprender novas tecnologias dependendo da necessidade
                                do trabalho.
                                <a href={marcos} target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Currículo
                                    </button>
                                </a>
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
                            <div className={styles.swiperAreaProjects}>
                                <SliderProjects />
                            </div>
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
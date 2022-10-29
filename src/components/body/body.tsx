import styles from './stylesbody.module.css'
import { SwiperSlide } from 'swiper/react'

import { TransitionSquare } from '../transition-square/transition-square' 
import { TransitionRectangle } from '../transition-rectangle/transition-rectangle'
import {  Slider } from '../slider/slider'


export const Body = () => {
    const settings = {
        spaceBetween: 50,
        slidesPerview: 3,
    }


    return (
        <>
            <main>      
                <div className={styles.container}>
                    <TransitionSquare />
                    <TransitionRectangle />
                    <TransitionSquare />
                    <TransitionRectangle />
                
                    <div className={styles.containerSection}>
                        <section className={styles.sectionFirst}>
                            <h1>Sobre</h1>
                            <div className={styles.areaAbout}>
                                <p>Tenho 22 anos, sou de Macaé, que se encontra no estado do Rio de Janeiro. Estou estudando programação
                                    desde fevereiro de 2022 no curso técnico da <a href="https://b7web.com.br/fullstack/?gclid=CjwKCAjw2OiaBhBSEiwAh2ZSPyVNFC6pyIcCnN7RotlMXeEBgHAjmCTiBioE9pW2SSXE18MtyyCwaBoCyBkQAvD_BwE&ref=I24108426I" target='_blank'>
                                    B7Web</a>. Enquanto estudo e me aprofundo em ferramentas Front-end busco uma oportunidade para começar no mercado de trabalho como um desenvolvedor Trainee ou Júnior.<br />
                                    Me sinto muito entusiasmado a cada dia que se passa conhecendo o mundo do desenvolvimento web, principalmente
                                    na área do Front-end. Estou totalmente disposto a aprender novas tecnologias dependendo da necessidade 
                                    do trabalho.
                                </p>
                            </div>
                        </section>
                        <section className={styles.sectionSecond}>
                            <h1>Habilidades</h1>
                            <div className={styles.swiperArea}>
                                <Slider />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
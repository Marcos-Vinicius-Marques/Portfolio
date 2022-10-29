import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import js from '../../assets/images/js.png'
import git from '../../assets/images/git.png'
import heidisql from '../../assets/images/HeidiSQL.png'
import reactjs from '../../assets/images/reactjs.png'


import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import styles from './slider.module.css'

import './slider.css'
import 'swiper/css' 
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export const Slider = () => {
    return (
        <>
            <Swiper className='Swiper'
                modules={[Navigation, Pagination, A11y, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 3000, disableOnInteraction:false}}
                slidesPerView={3}
                loop={true}
                >
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                            <img src={html} alt="HTML" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                            <img src={css} alt="CSS" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
                            <img src={js} alt="Javascript" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <div className={styles.backgroundGIT}>
                            <a href="https://git-scm.com/" target="_blank">
                                <img src={git} alt="Git" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <a href="https://www.heidisql.com/download.php" target="_blank">
                            <img src={heidisql} alt="HeidiSQL" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className={styles.areaIMG}>
                        <a href="https://pt-br.reactjs.org/" target="_blank">
                            <img src={reactjs} alt="Reactjs" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
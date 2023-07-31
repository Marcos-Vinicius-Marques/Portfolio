import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import styles from './sliderProjects.module.css'
import './sliderProjects.css'

import 'swiper/css' 
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export const SliderProjects = () => {
    return (
        <>
            <Swiper className='SwiperProjects'
                modules={[Navigation, Pagination, A11y, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 3000, disableOnInteraction:false}}  
                slidesPerView={2}
                loop={true}
                >
                <SwiperSlide className='SwiperSlideProjects'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                            <img src={html} alt="HTML" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlideProjects'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                            <img src={css} alt="CSS" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
import mistym from '../../assets/images/mistym.png'


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
                slidesPerView={1}
                loop={true}
                >

                <SwiperSlide className='SwiperSlideProjects'>
                    <div className={styles.areaIMG}>
                        <a href="https://mistym.com.br/" target="_blank">
                            <img src={mistym} alt="mistym.com.br" />
                        </a>
                        <h3>Mistym</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideProjects'>
                    <div className={styles.areaIMG}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                            <img src={mistym} alt="CSS" />
                        </a>
                        <h3>Advogado Christino Moreira</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
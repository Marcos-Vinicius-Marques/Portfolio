import mistym from '../../assets/images/mistym.png'
import advogado from '../../assets/images/advocaciamoreiraneto.png'

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
                        <a href="https://advocaciamoreiraneto.com.br/" target="_blank">
                            <img src={advogado} alt="advocaciamoreiraneto.com.br" />
                        </a>
                        <h3>Advocacia Moreira Neto</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
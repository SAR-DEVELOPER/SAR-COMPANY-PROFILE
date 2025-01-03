import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}
export default function ClientSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel ">
                <SwiperSlide className="image">
                    <img src="/assets/images/HMG.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/HIK.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/HMM.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/Megavision.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/Nusamba.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/Pakuwon.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/PMU.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/PTPN.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/PTPN4.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/SGN.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/Suppco.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/Telkom.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

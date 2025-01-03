import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.slick-next',
        prevEl: '.slick-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider4(LangData) {
    console.log(LangData)
    return (
        <>
            <div className="slider style_five">
                <Swiper {...swiperOptions} className="tab_content_slick">
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/slider-sar-bg-alt.png)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                SAR Consulting Group
                                            </h6>
                                            <h1 className="animate_left">{LangData.tagline || "Solusi Bisnis Terintegrasi Perusahaan Anda"}
                                            </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#about" className="theme_btn color_white  animated">{LangData.cta || "Pelajari Solusi Kami"}
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/slider-sartax-bg.png)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                SAR Tax & Management Consultant
                                            </h6>
                                            <h1 className="animate_left"> Konsultasikan Pajak dan Manajemen Bersama Kami</h1>
                                            <div className="button_all animate_down">
                                                <Link href="#about" className="theme_btn color_white  animated">Baca Lebih Lanjut
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/slider-pkm-bg.png)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Padjadjaran Karya Mandiri
                                            </h6>
                                            <h1 className="animate_left"> Tingkat Karir dan Pengetahuan Pajak Anda
                                            </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#about" className="theme_btn color_white  animated">Baca Lebih Lanjut
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/slider-ssn-bg.png)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Sarana Solusi Nawala
                                            </h6>
                                            <h1 className="animate_left"> Kami Siap Membantu <br/>
                                            Dalam Kepatuhan Pajak
                                            </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#about" className="theme_btn color_white  animated">Baca Lebih Lanjut
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <div>
                        <button type="button" className="slick-prev slick-arrow" style={{}}><span className="fi-rs-arrow-small-left" /></button>
                        <button type="button" className="slick-next slick-arrow" style={{}}><span className="fi-rs-arrow-small-right" /></button>
                    </div> */}
                </Swiper>
            </div>

        </>
    )
}

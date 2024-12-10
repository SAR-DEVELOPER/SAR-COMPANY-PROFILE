import Link from "next/link"
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

export default function Content3() {
    return (
        <section className="content-section">
            {/*-============spacing==========-*/}
            <div className="pd_top_50" />
            {/*-============spacing==========-*/}
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section_title type_two">
                            <div className="title_whole">
                                <h2 className="title">
                                    Tax Consultation
                                </h2>
                            </div>
                            <p>We simplify complex tax processes to ensure compliance and maximize your financial efficiency. Our tailored solutions address all aspects of tax management, allowing you to focus on growing your business worry-free.</p>
                        </div>
                        <div className="pd_bottom_40" />
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="theme_btn_all">
                                    <Link href="#" className="theme_btn big color_two rotate">
                                        Start Consulting <span><i className="fi-rr-arrow-small-up" /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="pd_bottom_40 d_md_none" />
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src="/assets/images/SAR/trio_sar_employee.png" className="img-fluid" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="swiper-container">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            767: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1199: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1350: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="content3_slider_card">
                                <div className="content3-logo-container mx-auto">
                                    <img src="assets/images/consultation.png" className="" />
                                </div>
                                <div className="content3_slider_text mx-auto">
                                    <span>Tax Consulting</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content3_slider_card">
                                <div className="content3-logo-container mx-auto">
                                    <img src="assets/images/regulations.png" className="" />
                                </div>
                                <div className="content3_slider_text mx-auto">
                                    <span>Tax Litigation and Disputes</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content3_slider_card">
                                <div className="content3-logo-container mx-auto">
                                    <img src="assets/images/corporate.png" className="" />
                                </div>
                                <div className="content3_slider_text mx-auto">
                                    <span>Mergers, Acquisitions and Corporate Restructuring</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content3_slider_card">
                                <div className="content3-logo-container mx-auto">
                                    <img src="assets/images/pricing.png" className="" />
                                </div>
                                <div className="content3_slider_text mx-auto">
                                    <span>Transfer Pricing</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

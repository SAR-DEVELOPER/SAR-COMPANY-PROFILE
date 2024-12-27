import { useState } from "react"


export default function Faq2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Our Services</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Expertise You Can Rely On</h2>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="position-relative br_left_3px_theme_color pd_left_10">
                                At SAR Consulting Group, we bring together a wide range of specialized services to support your business growth. From tax consulting to education, our expertise is designed to help you navigate challenges and achieve success with confidence.
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="block_faq">
                                <div className="accordion-box">
                                    <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                        <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                            <div className="question_box ">
                                                <div className="title_no_a_18 trans">Tax Consultation
                                                </div>
                                                <span className="icon_fq trans fi-rs-arrow-small-right" />
                                            </div>
                                        </div>
                                        <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            We simplify complex tax processes to ensure compliance and maximize your financial efficiency. Our tailored solutions address all aspects of tax management, allowing you to focus on growing your business worry-free.
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                        <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                            <div className="question_box">
                                                <div className="title_no_a_18 trans">Management and Accounting
                                                </div>
                                                <span className="icon_fq trans fi-rs-arrow-small-right" />
                                            </div>
                                        </div>
                                        <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                            From strategic planning to day-to-day accounting, we provide comprehensive services to optimize your operations and financial performance. Let us help you drive smarter decision-making and sustainable growth.
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                        <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                            <div className="question_box ">
                                                <div className="title_no_a_18 trans">
                                                    Education and Training
                                                </div>
                                                <span className="icon_fq trans fi-rs-arrow-small-right" />
                                            </div>
                                        </div>
                                        <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Empowering businesses and individuals with the skills they need to excel. Through our expert-led programs, we deliver practical training and insights that make a lasting impact on your professional journey.
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                        <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                            <div className="question_box ">
                                                <div className="title_no_a_18 trans">
                                                    Business Research and Study Services
                                                </div>
                                                <span className="icon_fq trans fi-rs-arrow-small-right" />
                                            </div>
                                        </div>
                                        <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Data-driven insights to guide your business decisions. Our research services uncover opportunities, mitigate risks, and provide actionable strategies to help you stay ahead in a competitive landscape.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                            <div className="image_box_only  type_three">
                                <div className="left">
                                    <div className="image one">
                                        <img src=" assets/images/SAR/DSC_2746.jpg" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="image two">
                                        <img src=" assets/images/SAR/DSC_2450.JPG" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="image three">
                                        <img src=" assets/images/SAR/DSC_1932.JPG" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_40" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

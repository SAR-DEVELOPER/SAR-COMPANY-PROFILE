import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Content10() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="content-section bg_op_1 position-relative">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className=" z_0" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="section_title type_four">
                                {/* <h4 className="sm_title"> Check Your Favorite Insurance</h4> */}
                                <div className="title_whole">
                                    <h2 className="title"> Education and Training</h2>
                                </div>
                                <div>
                                    Empowering businesses and individuals with the skills they need to excel. Through our expert-led programs, we deliver practical training and insights that make a lasting impact on your professional journey.
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="fom_tab_box custom_tabs type_three">
                                <ul className="nav nav-tabs links trans" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>
                                            Webinar
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>
                                            Brevet A/B
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>
                                            USKP Review
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(4)}>
                                        <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>
                                            Workshop
                                        </button>
                                    </li>
                                </ul>
                                <div className="s_tabs_content tab-content">
                                    <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox content10_tab">
                                            <div className='content10_flexinside'>
                                                <img src='assets/images/webinar.png' />
                                                <span>Join our expert-led online sessions covering the latest trends and insights in business, management, and tax consulting, accessible anytime, anywhere.</span>
                                            </div>
                                            <div className="position-relative content10_benefit">
                                                <ul className="list_box list color_three">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Interactive Q&A :</strong><br></br> Engage directly with industry experts. </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Flexible Access:</strong> <br></br>Participate from anywhere, live or recorded.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Expert Insights:</strong><br></br> Learn the latest business trends and strategies. </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Real-World Examples:</strong><br></br> Practical scenarios for immediate application.</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox content10_tab">
                                            <div className='content10_flexinside'>
                                                <img src='assets/images/certificate.png' />
                                                <span>Master essential tax skills with our comprehensive Brevet A/B program, designed for professionals and beginners seeking in-depth knowledge.</span>
                                            </div>
                                            <div className="position-relative content10_benefit">
                                                <ul className="list_box list color_three">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Comprehensive Curriculum:</strong><br></br> Covers Income Tax, VAT, and more.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Hands-On Training:</strong> <br></br>Real case studies and tax simulations.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Professional Certification:</strong><br></br> Enhance your credentials in taxation.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Expert Instructors:</strong><br></br>  Learn from seasoned tax professionals.</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox content10_tab">
                                            <div className='content10_flexinside'>
                                                <img src='assets/images/documents.png' />
                                                <span>Prepare for the USKP certification with confidence through our intensive review program, tailored for maximum success.</span>
                                            </div>
                                            <div className="position-relative content10_benefit">
                                                <ul className="list_box list color_three">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Exam-Focused:</strong><br></br> Targeted content to maximize certification success.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Mock Exams:</strong> <br></br>Simulate the actual test environment.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Structured Timeline:</strong><br></br> Clear goals and study plans.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Proven Success Rates:</strong><br></br>  Testimonials from previous top scorers.</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox content10_tab">
                                            <div className='content10_flexinside'>
                                                <img src='assets/images/practice.png' />
                                                <span>Engage in hands-on training sessions focusing on practical skills to solve real-world business challenges effectively.</span>
                                            </div>
                                            <div className="position-relative content10_benefit">
                                                <ul className="list_box list color_three">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Practical Skills:</strong><br></br> Hands-on training for real business scenarios.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Collaborative Learning:</strong> <br></br>Team-based exercises and problem-solving.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Diverse Topics:</strong><br></br> From financial modeling to leadership skills.</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                                            <span className="links" href="#">
                                                                <strong>Networking Opportunities:</strong><br></br>  Meet industry peers and mentors.
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="image_box_only type_seven color_two">
                                {/* <div className="icon_box_only type_four inline_box trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-1.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Life Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28465)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28465">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div> */}
                                {/* <div className="icon_box_only type_four position_two trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-2.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Health Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28463)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28463">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div> */}
                                <div className="fun_facts type_two">
                                    <h4>
                                        <CounterUp count={25} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_26">Years Of
                                        Experience</h6>
                                </div>
                                <div className="m_image">
                                    <img src="/assets/images/education2.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

import Link from "next/link"


export default function Client1() {
    return (
        <>
            <section className="client-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Our Trusted Partner</h4>
                                <div className="title_whole">
                                    <h2 className="title">
                                        Trusted by <span className="orange-highlight">Business</span>, <br></br> Driven by <span className="orange-highlight">Excellence</span>
                                    </h2>
                                </div>
                                <p>
                                    At SAR Consulting Group, we empower businesses of all sizes with trusted solutions in tax, management, education, and research. Our commitment to integrity, innovation, and client satisfaction has made us the preferred partner for growth, efficiency, and success.
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn big rotate">
                                    Join the List <span> <i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="client_grid">
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-1.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-2.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-3.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-4.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box last">
                                    <Link href="#">
                                        <img src="/assets/images/client-5.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box last">
                                    <Link href="#">
                                        <img src="/assets/images/client-6.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

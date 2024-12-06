import Link from "next/link"


export default function Service1() {
    return (
        <>
            <section className="service-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Our Value</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We Believe in 3 Things That Makes Us Great</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="mr_bottom_15" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="position-relative">
                                <p>"Our values define who we are and guide how we operate. They reflect our commitment to delivering exceptional service, building meaningful relationships, and fostering an environment where everyone can thrive. These principles are the foundation of SAR Consulting Group’s success."</p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="mr_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_25" />
                    {/*-============spacing==========-*/}
                    <div className="service_post position-relative  ajax_service_enabled ">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_two hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/other-ser-2.jpg" className="img-fluid" alt="service-image" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="icon trans">
                                            <i className="flaticon-salary trans" />
                                        </div>
                                        <div className="steps trans">1</div>
                                        <h4 className="title_24 trans">
                                            <Link href="/service">
                                                Client-Centered Excellence
                                            </Link>
                                        </h4>
                                        <p className="trans">
                                            We prioritize delivering exceptional value tailored to our clients’ unique needs.
                                        </p>
                                        <Link href="/service" className="rd_more">
                                            Read More <i className="fi-rr-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_two hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/other-ser-3.jpg" className="img-fluid" alt="service-image" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="icon trans">
                                            <i className="flaticon-management trans" />
                                        </div>
                                        <div className="steps trans">2</div>
                                        <h4 className="title_24 trans">
                                            <Link href="/service">
                                                Integrity, Honesty, and Trust
                                            </Link>
                                        </h4>
                                        <p className="trans">
                                            We build lasting relationships through honesty, transparency, and professionalism.
                                        </p>
                                        <Link href="/service" className="rd_more">
                                            Read More <i className="fi-rr-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="service_box type_two hover_1_get">
                                    <Link href="/service" className="img_bx">
                                        <div className="image trans hover_1">
                                            <img src="/assets/images/service/other-ser-1.jpg" className="img-fluid" alt="service-image" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                    </Link>
                                    <div className="content_box trans">
                                        <div className="icon trans">
                                            <i className="flaticon-business-trip trans" />
                                        </div>
                                        <div className="steps trans">3</div>
                                        <h4 className="title_24 trans">
                                            <Link href="/service">
                                                Collaboration and Growth
                                            </Link>
                                        </h4>
                                        <p className="trans">
                                            We foster a supportive, family-like environment that inspires innovation and success.
                                        </p>
                                        <Link href="/service" className="rd_more">
                                            Read More <i className="fi-rr-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_60" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

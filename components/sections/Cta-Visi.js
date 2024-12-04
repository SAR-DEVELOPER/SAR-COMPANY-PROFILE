import Link from "next/link"


export default function CtaVisi() {
    return (
        <>
            <section className="call-to-action-section position-relative bg_op_1" style={{ backgroundImage: 'url(assets/images/call-bg-h4-min.jpg)' }}>
                <div className="background_overlay bg_11 z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="large-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section_title color_white">
                                <div className="title_whole">
                                    <h2 className="title">
                                        Vision
                                    </h2>
                                    <p className="visi-text">
                                        To shape a future where business across industries thrive effortlessly with seamless, trust inspiring, and innovative approaches
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_title color_white">
                                <div className="title_whole">
                                    <h2 className="title">
                                        Mission
                                    </h2>
                                    <p>
                                        Test1
                                    </p>
                                    <p>
                                        Test2
                                    </p>
                                    <p>
                                        Test3
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 bg1">
                            <div className="theme_btn_all text-md-center">
                                <Link href="#" className="theme_btn big color_white_two rotate">
                                    Track Your Claim <span> <i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

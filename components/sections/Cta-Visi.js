import Link from "next/link"


export default function CtaVisi() {
    return (
        <>
            <section className="call-to-action-section position-relative bg_op_1" style={{ backgroundImage: 'url(assets/images/call-bg-h4-min.jpg)' }}>
                <div className="background_overlay bg_sar_blue z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="large-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5">
                            <div className="section_title color_white">
                                <div className="title_whole">
                                    <h2 className="title mb-2">
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
                                    <h2 className="title mb-4">
                                        Mission
                                    </h2>
                                    <ul className="">
                                        <li className="visi-text">
                                            Deliver integrated and innovative solutions that simplify complex business challenges.
                                        </li>
                                        <li className="visi-text">
                                            Foster long-term partnerships built on trust, professionalism, and client satisfaction.
                                        </li>
                                        <li className="visi-text">
                                            Cultivate a family-like work environment that inspires growth and collaboration.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

import Link from "next/link"


export default function Content2() {
    return (
        <>
            <section className="content-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image">
                                <img src="/assets/images/harmony.png" className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_30" />
                            {/*-============spacing==========-*/}
                            <div className="section_title type_two">
                                {/* <h4 className="sm_title"> Awards Winning</h4> */}
                                <div className="title_whole">
                                    <h2 className="title"> Management and Accounting</h2>
                                </div>
                                <p>
                                    From strategic planning to day-to-day accounting, we provide comprehensive services to optimize your operations and financial performance. Let us help you drive smarter decision-making and sustainable growth.
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative">
                                <ul className="list_box list color_two">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Financial Planning and Analysis  </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Accounting and Bookkeeping Services </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Business Performance Optimization &amp; Security </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn color_two big rotate">
                                    About Team <span> <i className=" fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

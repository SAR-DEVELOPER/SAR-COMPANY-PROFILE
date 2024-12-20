import Link from "next/link"

export default function Footer5({ }) {
    return (
        <>
            <footer className="footer style_four">
                <section className="md_content position-relative z_99">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_40" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/header-logo.png" alt="SAR Consulting Group " className="logo_default" />
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative color_black fw-bold">
                                        One Stop Business Solution
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}

                                    {/* <h4>Newsletter</h4> */}
                                    {/*<div className="newsteller_simple button_style_one">
                                        <div className="input_group">
                                            <form method="post">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" value="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>*/}
                                    {/*-============spacing==========-*/}
                                    <div className="pb-1" />
                                    {/*-============spacing==========-*/}
                                    {/* <div className="social-icons">
                                        <ul>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 pd_left_40">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fw-bold text-dark">
                                        Office
                                    </div>
                                    <div className="text-dark">
                                        Jalan Cipunagara No. 25,
                                        Cihapit, Bandung, Jawa Barat
                                        40124
                                    </div>
                                    <div className="fw-bold text-dark mt-3">
                                        Contact Details
                                    </div>
                                    <div className="text-dark">
                                        info@sar-consulting.co.id
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer_widgets_box pd_bottom_30">
                                
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}

                    {/*-============spacing==========-*/}
                </section>
                <section className="mottom_content  position-relative z_99">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    {/* <img src="/assets/images/shield.svg" className="img-fluid" alt="img" /> */}
                                                </div>
                                                <Link className="text-light text-center" href="#">
                                                    Copyright {new Date().getFullYear()}, SAR Consulting Group. All Rights Reserved
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/*-============spacing==========-*/}

                {/*-============spacing==========-*/}
            </footer>

        </>
    )
}

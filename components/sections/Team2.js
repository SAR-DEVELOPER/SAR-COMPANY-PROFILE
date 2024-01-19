import Link from "next/link"


export default function Team2() {
    return (
        <>
            <section className="team-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Our Team Member</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Meet Our Amazing Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Dr. H. Sony Devano, S.E., Ak., M.Ak.,</Link></h6>
                                        <p> SAR Tax & Management Consultant - Leader</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/1.Sony Devano.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li className="text_color_white">
                                                    CA.
                                                </li>
                                                <li className="text_color_white">
                                                    BKP.
                                                </li>
                                                <li className="text_color_white">
                                                    CACP.
                                                </li>
                                                <li className="text_color_white">
                                                    CPA.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Syaiful Anas, S.E., M.Sc.</Link></h6>
                                        <p>Padjadjaran Karya Mandiri - Leader</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/32.Syaiful Anas.png" alt="img" className="img-fluid" />
                                        {/* <div className="social-icons trans">
                                            <ul>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab  fa-facebook" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-twitter" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-skype" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                            Syaiful Rahman S., SE., MT., Ak.</Link></h6>
                                        <p>Sarana Solusi Nawala - Leader</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/49.Syaiful Rahman Soenaria.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li className="text_color_white">
                                                    CA.    
                                                </li>
                                                <li className="text_color_white">
                                                    CSRS.
                                                </li>
                                                <li className="text_color_white">
                                                    CMA.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                            Nurmala Arifin, SE., Ak., M.Ak.</Link></h6>
                                        <p>SAR Tax & Management Consultant - GM</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/3.Nurmala Arifin.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li className="text_color_white">
                                                    CA.
                                                </li>
                                                <li className="text_color_white">
                                                    BKP.
                                                </li>
                                                <li className="text_color_white">
                                                    CACP.
                                                </li>
                                                <li className="text_color_white">
                                                    CPA.
                                                </li>
                                                <li className="text_color_white">
                                                    CTA.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

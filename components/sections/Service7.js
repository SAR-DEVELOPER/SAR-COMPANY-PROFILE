import Link from "next/link"

export default function Service7() {
    return (
        <>
            <section className="service bg_7 bg_op_4" style={{ backgroundImage: 'url(assets/images/service-dot-bg.png)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section_title color_white type_five">
                                <h4 className="sm_title"> Layanan Kami
                                </h4>
                                <div className="title_whole">
                                    <h2 className="title">Ekplorasi pilihan rekanan untuk bisnis anda sekarang</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    <div className="service_post position-relative">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="service_box type_seven trans color_two">
                                    <div className="icon trans">
                                        <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-four-3)" />
                                        </svg>
                                        <i className=" flaticon-travel-insurance trans" />
                                    </div>
                                    <div className="content d-flex align-items-center">
                                        <img src="/assets/images/service/service-2.png" className="img-fluid" alt="service" />
                                        <div className="left">
                                            <div className="title_26">
                                                <Link href="/service-details">
                                                    SAR Tax & Management Consultant
                                                </Link>
                                            </div>
                                            <p className="trans">
                                                Konsultan Pajak yang Berpusat di Kota Bandung dan telah berpengalaman menangani ratusan klien besar maupun kecil di berbagai bidang usaha
                                            </p>
                                        </div>
                                        <div className="right">
                                            <Link href="/service-details" className="link">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" fill="url(#paint0_linear_1_4032)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_4032" x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                            <stop offset={1} stopColor="#F86403" />
                                                            <stop offset={1} stopColor="#D65501" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="service_box type_seven trans color_two">
                                    <div className="icon trans">
                                        <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-four-3)" />
                                        </svg>
                                        <i className=" flaticon-health-insurance trans" />
                                    </div>
                                    <div className="content d-flex align-items-center">
                                        <img src="/assets/images/service/service-8-min.jpg" className="img-fluid" alt="service" />
                                        <div className="left">
                                            <div className="title_26">
                                                <Link href="/service-details">Padjadjaran Karya Mandiri Institute</Link></div>
                                            <p className="trans">
                                                Lembaga pelatihan dan riset di bidang akuntansi, pajak, dan bisnis sudah lebih dari 4 tahun memberikan layanan kepada puluhan organisasi di berbagai bidang</p>
                                        </div>
                                        <div className="right">
                                            <Link href="/service-details" className="link">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" fill="url(#paint0_linear_1_4035)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_4035" x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                            <stop offset={1} stopColor="#F86403" />
                                                            <stop offset={1} stopColor="#D65501" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="service_box type_seven trans color_two">
                                    <div className="icon trans">
                                        <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-four-3)" />
                                        </svg>
                                        <i className=" flaticon-marriage trans" />
                                    </div>
                                    <div className="content d-flex align-items-center">
                                        <img src="/assets/images/service/service-6-min.jpg" className="img-fluid" alt="service" />
                                        <div className="left">
                                            <div className="title_26">
                                                <Link href="/service-details">
                                                    Sarana Solusi Nawala
                                                </Link>
                                            </div>
                                            <p className="trans">
                                                Empowering small businesses with expert tax consultation and management services. We simplify compliance, optimize finances, and help SMEs thrive.
                                            </p>
                                        </div>
                                        <div className="right">
                                            <Link href="/service-details" className="link">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" fill="url(#paint0_linear_1_4036)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_4036" x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                            <stop offset={1} stopColor="#F86403" />
                                                            <stop offset={1} stopColor="#D65501" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="service_box type_seven trans color_two">
                                    <div className="icon trans">
                                        <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-four-3)" />
                                        </svg>
                                        <i className=" flaticon-insurance-2 trans" />
                                    </div>
                                    <div className="content d-flex align-items-center">
                                        <img src="/assets/images/service/service-1-min-1.jpg" className="img-fluid" alt="service" />
                                        <div className="left">
                                            <div className="title_26">
                                                <Link href="/service-details">
                                                    Naryadanta Consulting
                                                </Link>
                                            </div>
                                            <p className="trans">
                                            Precision-driven accounting for businesses of all sizes. We deliver reliable financial solutions to simplify operations, ensure compliance, and fuel growth.
                                            </p>
                                        </div>
                                        <div className="right">
                                            <Link href="/service-details" className="link">
                                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" fill="url(#paint0_linear_1_403)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_403" x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                            <stop offset={1} stopColor="#F86403" />
                                                            <stop offset={1} stopColor="#D65501" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </Link>
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

import Link from "next/link"


export default function Content6() {
    return (
        <>
            <section className="content-section bg_light_1 position-relative overflow-hidden">
                <div className="ab_img_left_top z_0 mr_top_minus_150">
                    <img src="/assets/images/line-st-2.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_320" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title">SAR Consulting Group</h4>
                                <div className="title_whole">
                                    <h2 className="title">Kami Siap Membantu Perusahaan Anda</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative border_left_abolute_5px_two pd_left_40">
                            Mitra Strategis Anda untuk Keberlanjutan dan Efisiensi Bisnis. 
                            Kami adalah pusat solusi terkemuka yang menawarkan berbagai layanan 
                            konsultasi dan manajemen untuk mendukung pertumbuhan serta pengelolaan 
                            optimal perusahaan Anda.
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="icon_box_only type_five d-flex color_two trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Legal, Resmi dan Bersetifikat
                                                     </Link></div>
                                            {/* <p>Dari litigasi hingga restrukturisasi, 
                                                kami menyediakan layanan terpadu untuk memitigasi risiko dan 
                                                memastikan keberlanjutan operasional perusahaan Anda dengan kebijakan 
                                                pajak yang efisien.</p> */}
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-12">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                Berpengalaman menangani perusahaan-perusahaan skala besar</Link></div>
                                            {/* <p>Jasa pelatihan kami tidak hanya memberikan pengetahuan teoritis, 
                                                tetapi juga aplikasi praktis untuk kebutuhan bisnis Anda. Tingkatkan 
                                                kapabilitas tim Anda dalam mengelola akuntansi dan perpajakan dengan pendekatan
                                                 berbasis kasus.</p> */}
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-12">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                Presentase menang di Pengadilan Pajak hampir mencapai 100%</Link></div>
                                            {/* <p>Nam libero tempore cums soluta nobis cumque</p> */}
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex  color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                    Save Your Money </Link></div>
                                            <p>Blame belongs those Who duty through weakness</p>
                                        </div>
                                    </div>
                                    <div className="pd_bottom_20" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="image_box_only  type_four">
                                <div className="image">
                                    <img src="/assets/images/h3-ch-1-min.png" alt="img" className="img-fluid" />
                                </div>
                                <div className="abso_content">
                                    <img src="/assets/images/rotate-logo-green-1.png" alt="img" className="img-fluid" />
                                    <div className="authour_box">
                                        <div className="d-flex align-items-center">
                                            <img src="/assets/images/testimonial/test-1-min.png" alt="img" className="img-fluid" />
                                            <h6 className="title_no_a_18">Wilcoxon</h6>
                                        </div>
                                        <h6 className="title_no_a_26">We’re Best Insurance Company</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
                <div className="ab_img_right_bottom z_0">
                    <img src="/assets/images/bg-2-2.png" className="img-fluid" alt="img" />
                </div>
            </section>

        </>
    )
}

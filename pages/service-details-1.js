import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ServiceDetails() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Service Details">
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/service-1.png" alt="img" className="img-fluid" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Konsultasi Pajak</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Konsultasikan Pajak Perusahaan atau Pribadi Anda Bersama Kami</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Konsultasi Pajak merupakan jasa yang bertujuan untuk membantu memahami dan mematuhi peraturan perpajakan yang berlaku
                                 </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Perencanaan Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}> 
                                            Membantu dalam merancang struktur perpajakan baik Orang Pribadi maupun Perusahaan yang bertujuan untuk dapat mengoptimalisasikan manfaat perpajakan serta mengelola resiko terkait perpajakan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Kepatuhan Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}> 
                                            Membantu dalam memenuhi kewajiban perpajakan yang meliputi perhitungan, penyetoran dan penyusunan laporan pajak sesuai dengan peraturan perpajakan yang berlaku.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Reviu Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Membantu dalam memeriksa dan mengevaluasi kewajiban perpajakan yang telah dilaksanakan untuk memastikan pelaksanaan kewajiban tersebut telah sesuai dengan ketentuan perpajakan yang berlaku serta memberikan rekomendasi untuk dapat meningkatkan kepatuhan perpajakan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pengembalian Dana Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            Melakukan pendampingan pengembalian kelebihan pembayaran pajak yang dimulai pada saat pengajuan pengembalian kelebihan pembayaran pajak, pemenuhan dokumen-dokumen yang diperlukan dalam pengembalian kelebihan pembayaran pajak hingga kelebihan pembayaran pajak tersebut dikembalikan kepada Wajib Pajak.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}

                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Litigasi dan Sengketa Pajak</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Konsultasikan Pajak Perusahaan atau Pribadi Anda Bersama Kami</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Jasa ini merupakan jasa dalam menyelesaikan sengketa perpajakan yang timbul antara wajib pajak dengan otoritas pajak
                                 </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Perencanaan Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}> 
                                            Membantu dalam merancang struktur perpajakan baik Orang Pribadi maupun Perusahaan yang bertujuan untuk dapat mengoptimalisasikan manfaat perpajakan serta mengelola resiko terkait perpajakan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Kepatuhan Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}> 
                                            Membantu dalam memenuhi kewajiban perpajakan yang meliputi perhitungan, penyetoran dan penyusunan laporan pajak sesuai dengan peraturan perpajakan yang berlaku.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Reviu Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Membantu dalam memeriksa dan mengevaluasi kewajiban perpajakan yang telah dilaksanakan untuk memastikan pelaksanaan kewajiban tersebut telah sesuai dengan ketentuan perpajakan yang berlaku serta memberikan rekomendasi untuk dapat meningkatkan kepatuhan perpajakan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pengembalian Dana Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            Melakukan pendampingan pengembalian kelebihan pembayaran pajak yang dimulai pada saat pengajuan pengembalian kelebihan pembayaran pajak, pemenuhan dokumen-dokumen yang diperlukan dalam pengembalian kelebihan pembayaran pajak hingga kelebihan pembayaran pajak tersebut dikembalikan kepada Wajib Pajak.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/service-2.png" alt="img" className="img-fluid" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}
            </Layout>
        </>
    )
}
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
            <Layout breadcrumbTitle="Jasa Kami - Pelatihan dan Riset" headerStyle={5} footerStyle={5}>
                {/*-faqs*/}
                <section id="pelatihan" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/service-5.png" alt="img" className="img-fluid" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Konsultasi Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Jasa Pelatihan Akuntansi & Perpajakan</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Menawarkan berbagai kursus dan pelatihan dalam akuntansi, manajemen, dan perpajakan, 
                                tersedia dalam format online dan offline untuk memenuhi kebutuhan belajar Anda.
                                 </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pelatihan Perpajakan Komprehensif</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}> 
                                            Mempelajari tentang perpajakan dari dasar hingga strategi lanjutan. Ideal untuk profesional dan bisnis yang ingin memastikan 
                                            kepatuhan dan efisiensi pajak, kursus ini menawarkan wawasan mendalam tentang perencanaan dan pelaporan pajak.                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Kursus Manajemen Keuangan Bisnis</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}> 
                                            mengajarkan manajemen keuangan untuk meningkatkan kinerja bisnis. Dari perencanaan keuangan hingga analisis anggaran, 
                                            kursus ini memberikan keterampilan penting dalam pengelolaan arus kas dan keputusan keuangan perusahaan Anda.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Program Pelatihan Kepemimpinan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Program ini dirancang untuk mengembangkan keterampilan kepemimpinan dan manajemen tim. Fokus pada pembentukan pemimpin yang inspiratif, 
                                            kursus ini membekali peserta dengan alat untuk menginisiasi perubahan positif dan efektif dalam organisasi.                                            </div>
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
                <section id="riset" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Litigasi dan Sengketa Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Jasa Riset</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                memberikan solusi komprehensif untuk kebutuhan penelitian Anda. Tim ahli kami siap membantu 
                                dalam merancang, melaksanakan, dan menganalisis penelitian dengan cermat.                                 
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Kebijakan Akuntansi</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}> 
                                            Jasa riset Kebijakan Akuntansi menyediakan analisis mendalam terkait dengan standar dan metode akuntansi yang 
                                            diterapkan dalam suatu organisasi.                                            
                                            </div>
                                        </div>
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Perhitungan Harga Pokok Produksi</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}> 
                                            Jasa riset Perhitungan Harga Pokok Produksi bertujuan untuk memberikan pemahaman mendalam tentang elemen biaya
                                             yang terlibat dalam produksi suatu barang atau jasa.                                            
                                             </div>
                                        </div>
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Aksi Korporasi</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                            Jasa riset Aksi Korporasi fokus pada analisis peristiwa-peristiwa penting dalam perusahaan, 
                                            seperti restrukturisasi, merger, akuisisi, atau penggabungan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pengujian Kontrol Internal</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                            Jasa riset Pengujian Kontrol Internal membantu organisasi dalam mengevaluasi dan meningkatkan efektivitas 
                                            sistem kontrol internalnya.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Analisis Standar Belanja (ASB)</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                            Jasa riset Analisis Standar Belanja (ASB) memberikan wawasan terhadap pengeluaran dan belanja perusahaan. 
                                            </div>
                                        </div>
                                        <div className={isActive.key == 10 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 10 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(10)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pengukuran Kinerja</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                            Jasa riset Pengukuran Kinerja membantu organisasi dalam menilai sejauh mana pencapaian tujuan dan kinerja operasional. 
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
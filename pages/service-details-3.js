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
            <Layout breadcrumbTitle="Jasa Kami - Manajemen" headerStyle={5} footerStyle={5}>
                {/*-faqs*/}
                <section id="konsultasi-manajemen" className="faq-section">
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
                                        <h2 className="title">Konsultasi Manajemen</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Konsultasi manajemen mencakup berbagai layanan dan pendekatan untuk membantu 
                                organisasi atau individu meningkatkan kinerja, efisiensi, dan keberlanjutan operasional perusahaan.
                                 </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Audit Laporan Keuangan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}> 
                                            Pemeriksaan independen terhadap laporan keuangan suatu entitas untuk menilai keabsahan, keandalan, dan kepatuhan 
                                            terhadap standar akuntansi yang berlaku.                                           
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Review Laporan Keuangan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}> 
                                            Evaluasi menyeluruh atas laporan keuangan untuk memberikan keyakinan yang lebih rendah dibandingkan audit.
                                            Pemeriksaan ini memberikan tingkat kepercayaan yang lebih rendah tetapi tetap memberikan wawasan tentang kepatuhan dan akurasi.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Kesepakatan Akan Prosedur</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Pemeriksaan yang dilakukan berdasarkan prosedur-prosedur yang disepakati sebelumnya antara klien dan pemeriksa. 
                                            Fokusnya dapat bervariasi tergantung pada kebutuhan khusus.                                            
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Layanan IPO
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            Layanan yang mendukung perusahaan yang ingin go public. Ini mencakup penilaian dan penyusunan dokumen 
                                            untuk proses penawaran umum perdana (IPO).                                            
                                            </div>
                                        </div>
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Due Diligence Keuangan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}> 
                                            Pemeriksaan menyeluruh atas laporan keuangan dan informasi keuangan lainnya untuk menilai risiko dan peluang 
                                            terkait transaksi bisnis, investasi, atau akuisisi.                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}

                {/*-faqs*/}
                <section id="konsultasi-akuntansi" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Litigasi dan Sengketa Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Jasa dan Konsultasi Akuntansi</h2>
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
                                        
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Keberatan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}> 
                                            Pendampingan pengajuan keberatan berdasarkan Surat Ketetapan Pajak hingga diterbitkannya Surat Keputusan Keberatan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Banding / Gugatan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                            Pendampingan penyelesaian sengketa pajak melalui jalur hukum pada 
                                            Pengadilan Pajak dimulai dari Pengajuan Banding Berdasarkan Surat Keputusan 
                                            Keberatan hingga diterbitkannya Putusan Banding/Gugatan oleh Pengadilan Pajak.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Peninjauan Kembali</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                            Pendampingan penyelesaian sengketa pajak melalui jalur hukum luar biasa pada 
                                            Mahkamah Agung dimulai dari Pengajuan Peninjauan Kembali Berdasarkan Putusan Pengadilan
                                             Pajak hingga diterbitkannya Putusan Peninjauan Kembali oleh Mahkamah Agung.
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
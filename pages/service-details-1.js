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
            <Layout breadcrumbTitle="Jasa Kami - Pajak" headerStyle={5} footerStyle={5}>
                {/*-faqs*/}
                <section id="konsultasi-pajak" className="faq-section">
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
                                    {/* <h4 className="sm_title">Konsultasi Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Konsultasi Pajak</h2>
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
                <section id="litigasi-sengketa-pajak" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Litigasi dan Sengketa Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Litigasi dan Sengketa Pajak</h2>
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
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pemeriksaan Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}> 
                                            Pemeriksaan dimulai dari terbitnya Surat Perintah Pemeriksaan hingga terbitnya Surat Ketetapan Pajak (SKP).
                                            </div>
                                        </div>
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

                <section id="merger-akuisisi" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/service-3.png" alt="img" className="img-fluid" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Konsultasi Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Merger, Akusisi dan Restrukturisasi Perusahaan</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Merger & Akuisisi dan Restrukturisasi Perusahaan merupakan jasa untuk dapat 
                                mengidentifikasi potensi pajak serta memitigasi resiko perpajakan akibat adanya transaksi 
                                merger, akuisisi, penggabungan, atau divestasi perusahaan.
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Merger & Akuisisi</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}> 
                                            Merger & Akuisisi (M&A) adalah proses penggabungan atau pengambilalihan perusahaan. Merger terjadi 
                                            ketika dua perusahaan setara bergabung, sementara akuisisi melibatkan satu perusahaan yang mengambil 
                                            alih yang lain. M&A bertujuan untuk meningkatkan efisiensi, perluasan pasar, atau akses ke sumber daya baru. 
                                            Implementasinya memerlukan perencanaan dan integrasi yang hati-hati.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 10 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 10 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(10)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Restrukturisasi Perusahaan</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}> 
                                            Restrukturisasi perusahaan adalah usaha perubahan signifikan dalam struktur, operasi, atau kebijakan perusahaan. 
                                            Tujuannya adalah meningkatkan kinerja, mengurangi biaya, dan beradaptasi dengan perubahan pasar. Restrukturisasi 
                                            melibatkan langkah-langkah seperti pengurangan biaya, perampingan struktur organisasi, dan pembaruan proses bisnis. 
                                            Meskipun memberikan dampak positif jangka panjang, restrukturisasi juga dapat menimbulkan tantangan seperti resistensi
                                             internal dan perubahan budaya perusahaan.
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
                <section id="transfer-pricing" className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    {/* <h4 className="sm_title">Litigasi dan Sengketa Pajak</h4> */}
                                    <div className="title_whole">
                                        <h2 className="title">Transfer Pricing</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> 
                                Transfer pricing merupakan jasa perpajakan yang berkaitan dengan penetapan harga transfer antara 
                                entitas dalam satu grup perusahaan yang berbeda-beda atau antara entitas afiliasi yang berada di 
                                negara yang berbeda-beda. Tujuan dari transfer pricing adalah untuk memastikan bahwa harga transfer 
                                yang ditetapkan sesuai dengan harga pasar yang wajar dan adil serta sesuai dengan peraturan perpajakan 
                                yang berlaku. 
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 11 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 11 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(11)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Analisis Risiko</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}> 
                                            Mengidentifikasi potensi masalah transfer pricing 
                                            dan memberikan saran untuk mengurangi risiko tersebut
                                            </div>
                                        </div>
                                        <div className={isActive.key == 12 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 12 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(12)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Penetapan Harga Transfer</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}> 
                                            Melakukan pendampingan untuk dapat menentukan harga 
                                            transfer yang wajar sesuai dengan peraturan perpajakan yang berlaku.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 13 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 13 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(13)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Dokumentasi Transfer Pricing</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}> 
                                            Melakukan pendampingan dalam penyusunan dokumen transfer 
                                            pricing yang lengkap dan akurat untuk memenuhi persyaratan peraturan perpajakan yang berlaku.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 14 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 14 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(14)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Konsultasi Transfer Pricing</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}> 
                                            Memberikan saran dan alternatif terkait masalah yang timbul akibat transfer pricing.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 15 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 15 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(15)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Penyelesaian Sengketa</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}> 
                                            Melakukan pendampingan dalam menyelesaikan sengketa transfer pricing 
                                            dengan otoritas pajak baik melalui proses negosiasi maupun litigasi.
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
                                    <img src="/assets/images/service/service-4.png" alt="img" className="img-fluid" />
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
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
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
            <Layout breadcrumbTitle="Faq's" headerStyle={5} footerStyle={5}>
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Pajak</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Frequently Asked
                                            Questions!</h2>
                                    </div>
                                    <p> Beberapa pertanyaan dan jawaban dari kami seputar pajak dan jasa kami yang berhubungan dengan pajak, meliputi :</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="image_box_only type_two">
                                    <div className="left">
                                        <div className="image one">
                                            <img src=" assets/images/SAR/DSC_9747.jpg" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src=" assets/images/SAR/DSC_9776.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src=" assets/images/SAR/DSC_9890.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            
                            <div className="col-lg-6">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Apa peran seorang konsultan pajak?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            Seorang konsultan pajak membantu individu dan perusahaan dalam memahami, menerapkan, dan mematuhi hukum perpajakan. 
                                            Mereka memberikan saran tentang strategi perpajakan yang efektif dan membantu dalam persiapan dan pengajuan pajak.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Kapan waktu yang tepat untuk menggunakan jasa konsultan pajak?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                            Idealnya, konsultan pajak dapat digunakan sepanjang tahun untuk membantu perencanaan pajak dan strategi keuangan. Namun, 
                                            banyak orang dan bisnis menggunakan jasa konsultan pajak terutama saat mendekati batas waktu pengajuan pajak.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">
                                                        Apakah saya memerlukan konsultan pajak jika saya memiliki akuntan?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            Meskipun akuntan dapat membantu dengan beberapa aspek perpajakan, konsultan pajak memiliki 
                                            keahlian khusus dalam strategi perpajakan dan pengetahuan yang lebih mendalam tentang undang-undang 
                                            perpajakan yang kompleks. Jika Anda memiliki kebutuhan khusus terkait perpajakan, konsultan pajak bisa 
                                            menjadi tambahan yang berharga.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Bagaimana cara memilih konsultan pajak yang tepat?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            Pertimbangkan pengalaman, kredensial, dan reputasi konsultan pajak. Pastikan mereka memiliki pemahaman yang 
                                            kuat tentang peraturan perpajakan yang relevan dan memiliki catatan yang baik dalam memberikan saran yang berkualitas.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Apa yang perlu disiapkan sebelum bertemu dengan konsultan pajak?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                            Siapkan dokumentasi keuangan lengkap, termasuk laporan keuangan, informasi tentang penghasilan, pengeluaran, investasi, 
                                            dan transaksi lainnya yang relevan. Persiapkan juga pertanyaan tentang masalah perpajakan spesifik yang Anda hadapi.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Berapa biaya menggunakan jasa konsultan pajak?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                            Biaya konsultan pajak bervariasi tergantung pada kompleksitas situasi keuangan Anda, jangka waktu layanan,
                                             dan tingkat pengalaman konsultan. 
                                            Sebagian besar konsultan pajak akan memberikan perkiraan biaya selama konsultasi awal.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Apakah konsultan pajak dapat membantu dalam penyelesaian masalah pajak yang rumit?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                            Ya, konsultan pajak seringkali memiliki pengalaman dalam menangani masalah perpajakan yang kompleks dan dapat 
                                            memberikan strategi untuk menyelesaikan masalah tersebut dengan cara yang paling menguntungkan secara perpajakan.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_20" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faq end*/}
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_20" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Manajemen</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Frequently Asked Questions!</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10">
                                Beberapa pertanyaan dan jawaban dari kami seputar manajemen dan jasa kami 
                                yang berhubungan dengan manajemen, meliputi :
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Apa itu konsultasi manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                            Konsultasi manajemen adalah layanan di mana para ahli memberikan saran dan bimbingan kepada perusahaan 
                                            dalam mengelola aspek-aspek tertentu dari bisnis mereka, termasuk strategi, operasi, keuangan, dan sumber daya manusia.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">
                                                        Kapan waktu yang tepat untuk menggunakan jasa konsultasi manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                            Perusahaan sering mengambil jasa konsultasi manajemen saat mereka menghadapi tantangan 
                                            tertentu, seperti restrukturisasi organisasi, ekspansi bisnis, implementasi strategi baru, 
                                            atau membutuhkan pandangan eksternal untuk meningkatkan kinerja mereka.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 10 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 10 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(10)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Apakah perusahaan kecil juga memerlukan konsultasi manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                            Ya, perusahaan kecil juga bisa mendapatkan manfaat dari konsultasi manajemen. Bahkan, bagi perusahaan kecil yang 
                                            mungkin memiliki sumber daya terbatas, konsultasi manajemen dapat menjadi kunci untuk membantu mereka berkembang 
                                            dan bersaing di pasar.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 11 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 11 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(11)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Apa yang bisa diharapkan dari konsultan manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                            Seorang konsultan manajemen akan bekerja sama dengan perusahaan untuk mengidentifikasi masalah, merancang 
                                            solusi yang tepat, dan memberikan rekomendasi yang dapat dilaksanakan untuk mencapai tujuan bisnis yang ditetapkan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 12 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 12 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(12)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Berapa lama waktu yang dibutuhkan untuk melihat hasil dari konsultasi manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                            Seorang konsultan manajemen akan bekerja sama dengan perusahaan untuk mengidentifikasi masalah, merancang 
                                            solusi yang tepat, dan memberikan rekomendasi yang dapat dilaksanakan untuk mencapai tujuan bisnis yang ditetapkan.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 13 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 13 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(13)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Berapa biaya menggunakan jasa konsultan manajemen?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                            Biaya konsultasi manajemen bervariasi tergantung pada kompleksitas proyek, 
                                            tingkat pengalaman konsultan, dan jenis layanan yang disediakan. Biasanya, konsultan 
                                            akan menyusun proposal proyek yang mencakup perkiraan biaya sebelum memulai kerjasama.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="image_box_only  type_three">
                                    <div className="left">
                                        <div className="image one">
                                            <img src=" assets/images/SAR/DSC_9947.jpg" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src=" assets/images/SAR/DSC_9653.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src=" assets/images/SAR/DSC_9862.jpg" alt="img" className="img-fluid" />
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
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Pelatihan</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Frequently Asked
                                            Questions!</h2>
                                    </div>
                                    <p> Beberapa pertanyaan dan jawaban dari kami seputar pelatihan pajak dan akuntansi, meliputi :</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="image_box_only type_one">
                                    <div className="left">
                                        <div className="image one">
                                            <img src=" assets/images/SAR/DSC_9675.jpg" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src=" assets/images/SAR/DSC_9645.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src=" assets/images/SAR/DSC_9595.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            
                            <div className="col-lg-6">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 14 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 14 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(14)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Siapa yang cocok mengikuti pelatihan ini?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                            Pelatihan ini cocok untuk mereka yang tertarik mempelajari atau meningkatkan pengetahuan 
                                            mereka dalam bidang perpajakan dan akuntansi. Ini dapat bermanfaat bagi pemilik bisnis,
                                             akuntan, pegawai keuangan, atau siapa pun yang ingin memahami lebih dalam tentang pengelolaan
                                              keuangan dan pajak.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 15 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 15 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(15)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Apakah pelatihan ini memerlukan pengetahuan sebelumnya dalam bidang perpajakan atau akuntansi?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                            Tidak. Pelatihan ini dirancang untuk semua tingkat pengetahuan, termasuk pemula. Materi akan disajikan secara bertahap, 
                                            mulai dari konsep dasar hingga topik yang lebih canggih. 
                                            Tutor kami akan membimbing Anda melalui setiap langkah dengan cara yang mudah dipahami.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 16 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 16 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(16)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">
                                                    Apa saja topik yang akan dibahas dalam pelatihan ini?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 16 ? "block" : "none"}` }}>
                                            Topik yang dibahas mencakup dasar-dasar akuntansi, peraturan perpajakan, persiapan laporan keuangan, audit, 
                                            pengelolaan pajak, strategi perencanaan pajak, 
                                            dan aspek praktis lainnya yang relevan dengan perpajakan dan akuntansi.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 17 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 17 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(17)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Bagaimana pelatihan ini disampaikan?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 17 ? "block" : "none"}` }}>
                                            Pertimbangkan pengalaman, kredensial, dan reputasi konsultan pajak. Pastikan mereka memiliki pemahaman yang 
                                            kuat tentang peraturan perpajakan yang relevan dan memiliki catatan yang baik dalam memberikan saran yang berkualitas.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 18 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 18 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(18)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        Apa yang perlu disiapkan sebelum bertemu dengan konsultan pajak?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 18 ? "block" : "none"}` }}>
                                            Pelatihan dapat disampaikan dalam berbagai format, termasuk kuliah, studi kasus, diskusi kelompok, dan latihan praktis.
                                             Materi pelatihan dapat disampaikan secara langsung di lokasi, 
                                            secara online melalui webinar, atau kombinasi dari keduanya.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Apakah pelatihan ini bersifat sertifikasi?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                            Ya, beberapa pelatihan mungkin menawarkan sertifikasi setelah menyelesaikan program. Namun, ini tergantung pada penyelenggara 
                                            pelatihan dan jenis pelatihan yang Anda ambil. Pastikan untuk memeriksa detail program 
                                            untuk informasi lebih lanjut tentang sertifikasi yang tersedia.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 19 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 19 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(19)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                    Apakah ada dukungan setelah pelatihan selesai?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 19 ? "block" : "none"}` }}>
                                            Ya, beberapa penyelenggara pelatihan mungkin menawarkan dukungan pasca-pelatihan, seperti akses ke sumber daya tambahan, 
                                            forum diskusi online, atau sesi konsultasi dengan instruktur. Ini bertujuan untuk membantu
                                             peserta menerapkan pengetahuan yang mereka peroleh dalam situasi nyata.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_20" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faq end*/}

            </Layout>
        </>
    )
}
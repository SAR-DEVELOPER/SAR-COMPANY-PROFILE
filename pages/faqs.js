import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
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
                            <div className="col-lg-5">
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
                                <div className="theme_btn_all">
                                    <Link href="/" className="theme_btn big rotate">
                                        Hubungi Kami <span> <i className=" fi-rr-arrow-small-up" /></span>
                                    </Link>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-7">
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
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faq end*/}
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_60" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Amazing Company</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Great Insurance your Solutions For Business</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10">
                                    Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
                                    laudantium aperiam eaquecy
                                    inventore veritatis architecto beatae
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                Quis autem vel eum iure reprehenderit ea voluptate esse molestiae
                                                consequatur veillum voluptas nullaes
                                            </div>
                                        </div>
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        How Much Experience Our Team Member ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
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
                                            <img src=" assets/images/about/about-2-1.jpg" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src=" assets/images/about/about-2-3.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src=" assets/images/about/about-2-2.jpg" alt="img" className="img-fluid" />
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
                {/*testimonial*/}
                <Testimonial4 />
                {/*testimonial*/}


            </Layout>
        </>
    )
}
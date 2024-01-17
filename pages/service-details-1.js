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
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Pengembalian Dana Pajak</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
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
                {/*form*/}
                <section className="form-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <h4 className="sm_title"> Check Your Favorite Insurance</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Get Started Favorite Insurance</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="fom_tab_box custom_tabs type_four">
                                    <ul className="nav nav-tabs links trans justify-content-center" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>House Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}> Medical Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}> Travel Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>Life Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            <button className={activeIndex === 5 ? "nav-link active" : "nav-link"}> Car Insurance </button>
                                        </li>
                                    </ul>
                                    <div className="s_tabs_content tab-content">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 5 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*form*/}


            </Layout>
        </>
    )
}
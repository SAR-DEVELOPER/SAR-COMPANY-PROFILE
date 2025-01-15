import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function Team() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={5} breadcrumbTitle="Tim Kami">
                {/*team*/}
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
                        <div>
                            <div className="team-innerpages-area section-padding8">
                                <div className="container">
                                    <div className="row">
                                        <h1 className="team-header">Jajaran Pimpinan</h1>
                                        <div className="col-lg-3 margin-b30"></div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/sony.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Dr. Sony Devano</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., Ak., M.Ak., CA., BKP., CPA., CACP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Managing Partner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/agus.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Agus Puji Priyono</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., S.H., M.Ak. M.H., M.AP, Ak, CA, CPA, CPMA, SAS, CACP, CLA, CCC, CPS</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Partner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/nurmala.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Nurmala Arifin</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., Ak., M.Ak., CA., BKP., CACP., CPA. CTA., CHCP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">General Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <h1 className="team-header">Staff Ahli</h1>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/ersa.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Ersa Tri Wahyuni</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">Ph.D., CA., CPMA., CPSAK., CPA</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_2.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Citra Sukmadilaga</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">Ph.D., Ak. CA., CACP., QRMP., ERMCP, CWM</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/zakie.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Ahmad Zakie Mubarrok</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., M.Acc., CPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Rasono</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">Ak., M.Si.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_2.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Prof. Dr. Harry Suharman</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., M.A., Ak., CA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/rahman.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Syaiful Rahman S.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., MT., Ak., CA., CSRS., CMA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_female_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fury Khristianty Fitriyah</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE, M.Ak, QIA., Ak., CA., CACP., CRP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_female_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Dewi Prabawanti Dwi Astuti</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/Evita.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Evita Puspitasari</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., M.Si., Ak., CA., CRP., CWM.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/selly.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Selly Herdianti</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., M.Si., Ak., BKP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/anas.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Syaiful Anas.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., M.Sc.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_female_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Prof. Dr. Ilya Avianti</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., M.Si., Ak. CA., CPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/dini.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Dr. Dini Rosdini</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., AK., M.Ak., CA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_female_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Prima Yusi Sari</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., ME., Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Staf Ahli</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <h1 className="team-header">Manager</h1>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/jaka.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Jaka Lirmaya</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak., BKP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/almer.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Almer Reyhan Islam</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/mesayu.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Mesayu Dita Desianti</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE.,ACPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/febriyanto.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Febriyanto</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.T., BKP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <h1 className="team-header">Assistant Manager</h1>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/nadia.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Nadia Khairina</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak., BKP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/nabila.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Nabila Indarwanti</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., BKP., ACPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/filosofi.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Filosofi Putri Aulia</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., M.Ak., RSA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>

                                    <div className="row row-container">
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/ryma.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Ryma Nerrisa P.A.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak., ACPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/faisal.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Faisal Ichsan Suherman</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">A.Md</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/rivanessa.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Rivanessa Paradise</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak., ACPA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Assistant Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>

                                    <div className="row row-container">
                                        <h1 className="team-header">Konsultan</h1>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/aries.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fahmi Ariestiawan</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-3 margin-b30">
                                    <div className="teaminner-section">
                                        <div className="project-item-two">
                                            <div className="project-thumb-two">
                                                <div className="team-overlay"></div>
                                                <img src="/assets/images/sectionimg/team/blank_male_1.png" alt="" />
                                            </div>

                                            <div className="team-pera text-center margin-t">
                                                <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Reiza Ardia Garetta</Link></h1>
                                                <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak., BKP.</p>
                                                <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/feni.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Feni Nur S.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., BKP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/nisa.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Nisa Risnawati</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/irza.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Irza Hawali Yassaka</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/Mucha.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Muchamad Adiya Laksono</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak., CDM.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/fiany.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fiany Pradita Shanda</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/feby.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Feby Nuraeni</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/januarsyah.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Januarsyah Dwi Priyono</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/daffa.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">M. Daffa Aryaguna</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/afra.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Afra Luthvira</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/gian.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Muhammad Gian Akbar</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/alia.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Alia Rahmaniar</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/fila.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fi'la Al Farisi</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.A.K.P.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/meytha.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Meytha Aulia</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/fakhri.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fakhri Ghaffar</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/sadewa.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Sadewa Hakam M.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/maul.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">M. Rafly Maulana S.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/dinda.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Dinda Yurizkya W.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/rizki.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Rizki Alaika</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.E., M.Ak., DiplAB.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/zalfa.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Nabilla Zalfa Adiba</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/hana.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Hana Prabandani</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/viona.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Viona Zulfaindra</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_2.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">M. Rafli Himawan</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_female_1.png" alt="" />
                                                    </div>

                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Anisyah Putri Nadeak</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Tr.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Konsultan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <h1 className="team-header">Operasional</h1>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/fitri.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fitri Safriani H.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., CHRS., CHCP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - HRD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/imam.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Imam Isnaini I.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.H., CHCP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Staf Legal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>

                                    <div className="row row-container">
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/lia.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Lia Juhriah L.</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., MM.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Finance & Administration</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/chitra.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Chitra Lestari</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Accounting</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/wulan.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Tri Indah Wulandari</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Ak.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Administration</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/alda.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Alda Kusma Ayu</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Administration</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/alif.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Alif Naufal Hakim</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Kom.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/fachtian.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Fachtian Abdulrahman Idris</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">MTCNA.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/alfaza.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Alfaza Ranggana</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Kom., CSCU., MCE.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>
                                    <div className="row row-container">
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/aldio.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Aldio Misky Muhammad</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Kom., CDM.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT / PKM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/wilson.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Wilson Nathanael</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Kom.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_2.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Premananda Setyo</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.Kom.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - IT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>
                                    <div className="row row-container">
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/suparman.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Suparman</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/khoerudin.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Khoerudin</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/asep.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Asep</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/ariaz.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Ariaz Noviandi</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/lilis.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Lilis Listiani</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/aep.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Aep</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/dwi.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Dwi Cahyo Abimanyu</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/eka.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Aditya Eka Firmansah</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/hanif.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Hanif Maulana</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/blank_male_1.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Rudi</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-container">
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/tatang.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Tatang Taryana</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Security</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/yusuf.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Yusup Wahyudin</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Security</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/septian.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Septian Leksmana</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12"><span>&#8203;</span></p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Security</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>

                                    <div className="row row-container">
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/yonny.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Yonny Fazriyana</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">SE., CHRS., CHCP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - HRD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 margin-b30 mx-auto">
                                            <div className="teaminner-section">
                                                <div className="project-item-two">
                                                    <div className="project-thumb-two">
                                                        <div className="team-overlay"></div>
                                                        <img src="/assets/images/sectionimg/team/achmad.png" alt="" />
                                                    </div>
                                                    <div className="team-pera text-center margin-t">
                                                        <h1 className="font-lora font-32 lineh-30 color-29 weight-600 margin-b8"><Link href="/team" className="color-29">Achmad Dzulfikri</Link></h1>
                                                        <p className="font-16 lineh-16 weight-500 color-28 font-ks margin-b12">S.H., CHCP.</p>
                                                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">Support - Staf Legal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 margin-b30 mx-auto"></div>
                                    </div>

                                </div>

                            </div>
                            {/*===== TEAM END=======*/}

                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_80" />
                    {/*-============spacing==========-*/}
                </section>



            </Layout>
        </>
    )
}
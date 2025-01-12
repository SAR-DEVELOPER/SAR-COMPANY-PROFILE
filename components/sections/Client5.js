import ClientSlider from "../slider/ClientSlider"


export default function Client5() {
    return (
        <>
            <section className="client-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title"> Klien Kami </h4>
                                <div className="title_whole">
                                    <h2 className="title"> Kami telah banyak bekerja sama dengan banyak perusahaan terkemuka di Indonesia  </h2>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="nav_false dot_false">
                                <ClientSlider />
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}

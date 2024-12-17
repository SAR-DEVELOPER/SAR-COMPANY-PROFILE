export default function ClientGrid() {
    return (
        <div className="container-fluid p-0">
            <main className="ClientGrid ClientGrid-main">
                {/* <div style={{ display: "flex", alignItems: "center", paddingLeft: "15px" }}>
                    <h1>Highlighted Sector</h1>
                    <h2>demo <span class="ClientGrid-demo-number">6</span></h2>
                </div>
                <div>
                    <div>
                        <img src="assets/images/client/kt_1.jpg" />
                        <span className="">Perkebunan</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="assets/images/client/medical.jpg" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="assets/images/client/telcom.jpg" />
                    </div>
                </div> */}
                <div class="ClientGrid-intro">
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/kt_1.png" />
                    </div>
                    <div className="ClientGrid-intro-title">
                        PERKEBUNAN
                    </div>
                </div>
                <div>
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/kebun_sawit.png" />
                    </div>
                    <div className="ClientGrid-item-title">
                        <img className="mx-auto" src="assets/images/client/palm_co.png" />
                        <div>Palm Co</div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/kebun_tebu.png" />
                    </div>
                    <div className="ClientGrid-item-title">
                        <img className="mx-auto" src="assets/images/client/pt_sgn.png" />
                        <div>PT SGN</div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/kebun_teh.png" />
                    </div>
                    <div className="ClientGrid-item-title">
                        <img className="mx-auto" src="assets/images/client/supp_co.png" />
                        <div>Supp Co</div>
                    </div>
                </div>
                <div className="-item-filler">
                    More
                </div>
                <div className="ClientGrid-item-filler">
                    8
                </div>
                <div className="ClientGrid-superwide">
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/hmm.png" />
                    </div>
                    <div className="ClientGrid-item-superwide-title">
                        <img src="assets/images/client/hmm_logo_alt.png" />
                        <div>Hudaya Maju Mandiri</div>
                    </div>
                </div>
                <div className="ClientGrid-superwide ClientGrid-item-filler">
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/telkom_group_bg_alt.png" />
                    </div>
                    <div className="ClientGrid-item-superwide-title">
                        <img src="assets/images/client/telkom_group.png" />
                        <div>Telkom Indonesia Group</div>
                    </div>
                </div>
                <div className="ClientGrid-heading ClientGrid-item-filler">
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/telcom.png" />
                    </div>
                    <div className="ClientGrid-item-title">
                        {/* <img className="mx-auto" src="assets/images/client/pt_sgn.png" /> */}
                        <div>Telecommunication</div>
                    </div>
                </div>
                <div className="ClientGrid-item-filler">
                    8
                </div>
                <div className="ClientGrid-wide ClientGrid-item-filler">
                    <div>
                        <img className="ClientGrid_background_image" src="assets/images/client/megavision.png" />
                    </div>
                    <div className="ClientGrid-item-wide-title">
                        <img src="assets/images/client/megavision-logo.png" />
                        <div style={{lineHeight:"3rem"}}>PT. Indonesia Broadband <br></br>Communications</div>
                    </div>
                </div>
            </main>


        </div>
    )
}
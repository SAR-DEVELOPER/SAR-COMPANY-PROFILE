import Layout from "@/components/layout/Layout";
import Analysis2 from "@/components/sections/Analysis2";
import Content1 from "@/components/sections/Content1";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Content5 from "@/components/sections/Content5";
import Content6 from "@/components/sections/Content6";
import Content7 from "@/components/sections/Content7";
import Content9 from "@/components/sections/Content9";
import Offer2 from "@/components/sections/Offer2";
import Service1 from "@/components/sections/Service1";
import Service2 from "@/components/sections/Service2";
import Service3 from "@/components/sections/Service3";
import Service3_animate from "@/components/sections/Service3_animate";
import Slider1 from "@/components/sections/Slider1";
import Slider2 from "@/components/sections/Slider2";
import Slider3 from "@/components/sections/Slider3";
import Slider4 from "@/components/sections/Slider4";
import SliderHighlight from "@/components/sections/Slider_Highlight";
// import SliderComponent from "@/components/sections/sliderComponent";

export default function Subsidiaries() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={5}>
                <div className="subsidiaries-container">
                    <Content7 />
                    <Offer2 />
                    {/* <Content9 /> */}
                    {/* <Service3 /> */}
                    {/* <Slider1 /> */}
                    {/* <SliderComponent /> */}
                    <SliderHighlight />
                </div>
            </Layout>
        </>
    )
}
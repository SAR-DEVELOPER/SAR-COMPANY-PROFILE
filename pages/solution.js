import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import About2 from "@/components/sections/About2";
import About3 from "@/components/sections/About3";
import About4 from "@/components/sections/About4";
import About5 from "@/components/sections/About5";
import Content1 from "@/components/sections/Content1";
import Content10 from "@/components/sections/Content10";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Content5 from "@/components/sections/Content5";
import Content6 from "@/components/sections/Content6";
import Content7 from "@/components/sections/Content7";
import Content8 from "@/components/sections/Content8";
import Content9 from "@/components/sections/Content9";
import Faq2 from "@/components/sections/Faq2";
import HeroSimple from "@/components/sections/Herosimple";
import Process1 from "@/components/sections/Process1";
import Process2 from "@/components/sections/Process2";
import Process3 from "@/components/sections/Process3";
import Process4 from "@/components/sections/Process4";
import Slider1 from "@/components/sections/Slider1";
import Slider2 from "@/components/sections/Slider2";
import Slider3 from "@/components/sections/Slider3";
import Slider5 from "@/components/sections/Slider5";
import SolutionHighlight from "@/components/sections/Solution_highlight";

export default function Solution() {
    return (
        <Layout headerStyle={7} footerStyle={5}>
            <HeroSimple />
            {/* <SolutionHighlight /> */}
            <Faq2 />
            <hr></hr>
            <Content3 />
            <hr></hr>
            <Content2 />
            <hr></hr>
            <Content10 />
            <hr></hr>
            <About2 />
        </Layout>
    )
}
import Layout from "@/components/layout/Layout";
import Content1 from "@/components/sections/Content1";
import Content10 from "@/components/sections/Content10";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Faq2 from "@/components/sections/Faq2";
import HeroSimple from "@/components/sections/Herosimple";
import SolutionHighlight from "@/components/sections/Solution_highlight";

export default function Solution() {
    return (
        <Layout headerStyle={7} footerStyle={5}>
            <HeroSimple />
            <SolutionHighlight />
            <Faq2 />
            <hr></hr>
            <Content3 />
            <hr></hr>
            <Content2 />
            <hr></hr>
            <Content10 />
            <hr></hr>

        </Layout>
    )
}
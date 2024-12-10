import Layout from "@/components/layout/Layout";
import Content3 from "@/components/sections/Content3";
import Faq2 from "@/components/sections/Faq2";
import HeroSimple from "@/components/sections/Herosimple";
import SolutionHighlight from "@/components/sections/Solution_highlight";

export default function Solution() {
    return (
        <Layout headerStyle={7} footerStyle={5}>
            <HeroSimple />
            <SolutionHighlight />
            <Faq2 />
            <Content3 />
        </Layout>
    )
}
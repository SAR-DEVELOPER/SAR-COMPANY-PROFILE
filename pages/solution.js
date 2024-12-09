import Layout from "@/components/layout/Layout";
import HeroSimple from "@/components/sections/Herosimple";
import SolutionHighlight from "@/components/sections/Solution_highlight";

export default function Solution() {
    return (
        <Layout headerStyle={7} footerStyle={5}>
            <HeroSimple />
            <SolutionHighlight />
        </Layout>
    )
}
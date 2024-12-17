import Layout from "@/components/layout/Layout";
import ClientGrid from "@/components/sections/ClientGrid";
import ClientHero from "@/components/sections/ClientHero";
import ClientSlider from "@/components/slider/ClientSlider";
import ClientSlider2 from "@/components/slider/ClientSlider2";

export default function Clients() {
    return (
        <Layout headerStyle={7} footerStyle={5}>
            <ClientHero />
            <ClientGrid />
        </Layout>
        )
}
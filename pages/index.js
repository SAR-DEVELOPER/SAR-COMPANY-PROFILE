import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Blog5 from "@/components/sections/Blog5"
import Client1 from "@/components/sections/Client1"
import Client2 from "@/components/sections/Client2"
import Client3 from "@/components/sections/Client3"
import Client4 from "@/components/sections/Client4"
import Client5 from "@/components/sections/Client5"
import Content6 from "@/components/sections/Content6"
import Cta2 from "@/components/sections/Cta2"
import Form4 from "@/components/sections/Form4"
import Funfacts3 from "@/components/sections/Funfacts3"
import Analysis1 from "@/components/sections/Analysis1"
import Service8 from "@/components/sections/Service8"
import Slider4 from "@/components/sections/Slider4"
import Team2 from "@/components/sections/Team2"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={5}>
                <Slider4 />
                <About5 />
                <Content6 />
                {/* <Service8 /> */}
                <Team2 />
                {/* <Form4 /> */}
                {/* <Analysis1 /> */}
                {/* <Testimonial4 /> */}
                <Client5 />
                {/* <Blog5 /> */}
                <Cta2 />
            </Layout>
        </>
    )
}
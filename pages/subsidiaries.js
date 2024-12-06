import Layout from "@/components/layout/Layout";
import Content1 from "@/components/sections/Content1";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Content5 from "@/components/sections/Content5";
import Content6 from "@/components/sections/Content6";
import Content7 from "@/components/sections/Content7";
import Content8 from "@/components/sections/Content8";
import Service1 from "@/components/sections/Service1";
import Service2 from "@/components/sections/Service2";
import Service3 from "@/components/sections/Service3";

export default function Subsidiaries() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={5}>
                <div className="subsidiaries-container">
                    <Content7 />
                    <Service3 />
                </div>
            </Layout>
        </>
    )
}
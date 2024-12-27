import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Content1 from "@/components/sections/Content1";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Content5 from "@/components/sections/Content5";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";
import Testimonial3 from "@/components/sections/Testimonial3";
import Testimonial4 from "@/components/sections/Testimonial4";
import Testimonial5 from "@/components/sections/Testimonial5";
import Slider1 from "@/components/sections/Slider1";
import Slider2 from "@/components/sections/Slider2";
import Offer1 from "@/components/sections/Offer1";
import Cta1 from "@/components/sections/Cta1";
import Cta2 from "@/components/sections/Cta2";
import CtaVisi from "@/components/sections/Cta-Visi";
import Funfacts1 from "@/components/sections/Funfacts1";
import Funfacts2 from "@/components/sections/Funfacts2";
import Funfacts3 from "@/components/sections/Funfacts3";
import Funfacts4 from "@/components/sections/Funfacts4";
import About1 from "@/components/sections/About1";
import About2 from "@/components/sections/About2";
import About3 from "@/components/sections/About3";
import About4 from "@/components/sections/About4";
import About5 from "@/components/sections/About5";
import Service1 from "@/components/sections/Service1";

const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import ScrollReveal dynamically to prevent SSR errors
      import("scrollreveal").then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        const handleRevealAnimations = () => {
          if (window.innerWidth < 768) {
            const elements = document.querySelectorAll(".timeline-content.js--fadeInLeft");
            elements.forEach((el) => {
              el.classList.remove("js--fadeInLeft");
              el.classList.add("js--fadeInRight");
            });

            sr.reveal(".js--fadeInRight", {
              origin: "right",
              distance: "300px",
              easing: "ease-in-out",
              duration: 800,
            });
          } else {
            sr.reveal(".js--fadeInLeft", {
              origin: "left",
              distance: "300px",
              easing: "ease-in-out",
              duration: 800,
            });

            sr.reveal(".js--fadeInRight", {
              origin: "right",
              distance: "300px",
              easing: "ease-in-out",
              duration: 800,
            });
          }
        };

        handleRevealAnimations();

        const resizeHandler = () => {
          handleRevealAnimations();
        };

        window.addEventListener("resize", resizeHandler);

        return () => {
          window.removeEventListener("resize", resizeHandler);
        };
      });
    }
  }, []);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={7} footerStyle={5} breadcrumbTitle="About Us">
        <Content1 />
        <CtaVisi />
        <About1 />
        <Service1 />
        <div className="custom-timeline">
          <section className="timeline">
            <div className="container">
              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInLeft">
                  <h2>SAR Tax & Management Consultant</h2>
                  <p>
                    Established on April 17, 2015, SAR Tax & Consultant specializes in tax and management consulting for mid-level companies. It has extensive experience working with state-owned enterprises such as PTPN Holding, Telkom Group, and private companies like Hudaya Maju Mandiri and Indonesia Broadband Communications.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInRight">
                  <h2>Padjadjaran Karya Mandiri (PKM)</h2>
                  <p>
                    Founded on February 18, 2019, PKM serves as a training and development center specializing in accounting and management training for individuals and organizations.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInLeft">
                  <h2>Sarana Solusi Nawala (SSN)</h2>
                  <p>
                    Since February 22, 2019, SSN has supported small and medium enterprises (SMEs) as a tax and management consultant, providing practical solutions to grow their businesses.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInRight">
                  <h2>Naryadanta</h2>
                  <p>
                    Established on February 12, 2024, Naryadanta KJA is an accounting services firm delivering modern and reliable accounting solutions to clients across various sectors.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

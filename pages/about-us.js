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
                  <h2>Founding</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione
                    omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae
                    dolor, nostrum excepturi amet in dolores. Alias, ullam.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInRight">
                  <h2>Growth Expansion</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione
                    omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae
                    dolor, nostrum excepturi amet in dolores. Alias, ullam.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInLeft">
                  <h2>Major Achievements</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione
                    omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae
                    dolor, nostrum excepturi amet in dolores. Alias, ullam.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-img"></div>
                <div className="timeline-content js--fadeInRight">
                  <h2>Recent Milestones</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione
                    omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae
                    dolor, nostrum excepturi amet in dolores. Alias, ullam.
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

import About1 from "@/components/sections/About1";
import About2 from "@/components/sections/About2";
import About3 from "@/components/sections/About3";
import About4 from "@/components/sections/About4";
import About5 from "@/components/sections/About5";
import Analysis1 from "@/components/sections/Analysis1";
import Analysis2 from "@/components/sections/Analysis2";
import Banner1 from "@/components/sections/Banner1";
import Blog1 from "@/components/sections/Blog1";
import Blog2 from "@/components/sections/Blog2";
import Blog3 from "@/components/sections/Blog3";
import Blog4 from "@/components/sections/Blog4";
import Blog5 from "@/components/sections/Blog5";
import Blog6 from "@/components/sections/Blog6";
import Blog7 from "@/components/sections/Blog7";
import Client1 from "@/components/sections/Client1";
import Client2 from "@/components/sections/Client2";
import Client3 from "@/components/sections/Client3";
import Client4 from "@/components/sections/Client4";
import Client5 from "@/components/sections/Client5";
import Content1 from "@/components/sections/Content1";
import Content2 from "@/components/sections/Content2";
import Content3 from "@/components/sections/Content3";
import Content4 from "@/components/sections/Content4";
import Content5 from "@/components/sections/Content5";
import Content6 from "@/components/sections/Content6";
import Content7 from "@/components/sections/Content7";
import Content8 from "@/components/sections/Content8";
import Content9 from "@/components/sections/Content9";
import CtaVisi from "@/components/sections/Cta-Visi";
import Cta1 from "@/components/sections/Cta1";
import Cta2 from "@/components/sections/Cta2";
import Faq1 from "@/components/sections/Faq1";
import Form1 from "@/components/sections/Form1";
import Form2 from "@/components/sections/Form2";
import Form3 from "@/components/sections/Form3";
import Form4 from "@/components/sections/Form4";
import Form5 from "@/components/sections/Form5";
import Funfacts1 from "@/components/sections/Funfacts1";
import Funfacts2 from "@/components/sections/Funfacts2";
import Funfacts3 from "@/components/sections/Funfacts3";
import Funfacts4 from "@/components/sections/Funfacts4";
import Offer1 from "@/components/sections/Offer1";
import Offer2 from "@/components/sections/Offer2";
import Portfolio1 from "@/components/sections/Portfolio1";
import Process1 from "@/components/sections/Process1";
import Process2 from "@/components/sections/Process2";
import Process3 from "@/components/sections/Process3";
import Service1 from "@/components/sections/Service1";
import Service2 from "@/components/sections/Service2";
import Service3 from "@/components/sections/Service3";
import Service4 from "@/components/sections/Service4";
import Service5 from "@/components/sections/Service5";
import Service6 from "@/components/sections/Service6";
import Service7 from "@/components/sections/Service7";
import Service8 from "@/components/sections/Service8";
import Service9 from "@/components/sections/Service9";
import Slider1 from "@/components/sections/Slider1";
import Slider2 from "@/components/sections/Slider2";
import Slider3 from "@/components/sections/Slider3";
import Slider4 from "@/components/sections/Slider4";
import Slider5 from "@/components/sections/Slider5";
import Subsidiaries from "@/components/sections/subsidiaries";
import Team1 from "@/components/sections/Team1";
import Team2 from "@/components/sections/Team2";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";
import Testimonial3 from "@/components/sections/Testimonial3";
import Testimonial4 from "@/components/sections/Testimonial4";
import Testimonial5 from "@/components/sections/Testimonial5";

import { useState } from 'react';

export default function Showroom() {
    const [activeGroup, setActiveGroup] = useState(null);

    const toggleGroup = (group) => {
        setActiveGroup(activeGroup === group ? null : group);
    };

    return (
        <div className="showroom">
            <h1>SHOWROOM</h1>
            <hr />

            <div>
                <h2 onClick={() => toggleGroup("About")} style={{ cursor: "pointer" }}>
                    About
                </h2>
                {activeGroup === "About" && (
                    <div>
    
                        <h3>About1</h3>
                        <About1 />
                        <hr />
        
                        <h3>About2</h3>
                        <About2 />
                        <hr />
        
                        <h3>About3</h3>
                        <About3 />
                        <hr />
        
                        <h3>About4</h3>
                        <About4 />
                        <hr />
        
                        <h3>About5</h3>
                        <About5 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Analysis")} style={{ cursor: "pointer" }}>
                    Analysis
                </h2>
                {activeGroup === "Analysis" && (
                    <div>
    
                        <h3>Analysis1</h3>
                        <Analysis1 />
                        <hr />
                        <h3>Analysis2</h3>
                        <Analysis2 />
                        <hr />
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Banner")} style={{ cursor: "pointer" }}>
                    Banner
                </h2>
                {activeGroup === "Banner" && (
                    <div>
    
                        <h3>Banner1</h3>
                        <Banner1 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Blog")} style={{ cursor: "pointer" }}>
                    Blog
                </h2>
                {activeGroup === "Blog" && (
                    <div>
    
                        <h3>Blog1</h3>
                        <Blog1 />
                        <hr />
        
                        <h3>Blog2</h3>
                        <Blog2 />
                        <hr />
        
                        <h3>Blog3</h3>
                        <Blog3 />
                        <hr />
        
                        <h3>Blog4</h3>
                        <Blog4 />
                        <hr />
        
                        <h3>Blog5</h3>
                        <Blog5 />
                        <hr />
        
                        <h3>Blog6</h3>
                        <Blog6 />
                        <hr />
        
                        <h3>Blog7</h3>
                        <Blog7 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Client")} style={{ cursor: "pointer" }}>
                    Client
                </h2>
                {activeGroup === "Client" && (
                    <div>
    
                        <h3>Client1</h3>
                        <Client1 />
                        <hr />
        
                        <h3>Client2</h3>
                        <Client2 />
                        <hr />
        
                        <h3>Client3</h3>
                        <Client3 />
                        <hr />
        
                        <h3>Client4</h3>
                        <Client4 />
                        <hr />
        
                        <h3>Client5</h3>
                        <Client5 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Content")} style={{ cursor: "pointer" }}>
                    Content
                </h2>
                {activeGroup === "Content" && (
                    <div>
    
                        <h3>Content1</h3>
                        <Content1 />
                        <hr />
        
                        <h3>Content2</h3>
                        <Content2 />
                        <hr />
        
                        <h3>Content3</h3>
                        <Content3 />
                        <hr />
        
                        <h3>Content4</h3>
                        <Content4 />
                        <hr />
        
                        <h3>Content5</h3>
                        <Content5 />
                        <hr />
        
                        <h3>Content6</h3>
                        <Content6 />
                        <hr />
        
                        <h3>Content7</h3>
                        <Content7 />
                        <hr />
        
                        <h3>Content8</h3>
                        <Content8 />
                        <hr />
        
                        <h3>Content9</h3>
                        <Content9 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Miscellaneous")} style={{ cursor: "pointer" }}>
                    Miscellaneous
                </h2>
                {activeGroup === "Miscellaneous" && (
                    <div>
    
                        <h3>Cta-Visi</h3>
                        <CtaVisi />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Call to Action")} style={{ cursor: "pointer" }}>
                    Call to Action
                </h2>
                {activeGroup === "Call to Action" && (
                    <div>
    
                        <h3>Cta1</h3>
                        <Cta1 />
                        <hr />
        
                        <h3>Cta2</h3>
                        <Cta2 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("FAQ")} style={{ cursor: "pointer" }}>
                    FAQ
                </h2>
                {activeGroup === "FAQ" && (
                    <div>
    
                        <h3>Faq1</h3>
                        <Faq1 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Forms")} style={{ cursor: "pointer" }}>
                    Forms
                </h2>
                {activeGroup === "Forms" && (
                    <div>
    
                        <h3>Form1</h3>
                        <Form1 />
                        <hr />
        
                        <h3>Form2</h3>
                        <Form2 />
                        <hr />
        
                        <h3>Form3</h3>
                        <Form3 />
                        <hr />
        
                        <h3>Form4</h3>
                        <Form4 />
                        <hr />
        
                        <h3>Form5</h3>
                        <Form5 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Fun Facts")} style={{ cursor: "pointer" }}>
                    Fun Facts
                </h2>
                {activeGroup === "Fun Facts" && (
                    <div>
    
                        <h3>Funfacts1</h3>
                        <Funfacts1 />
                        <hr />
        
                        <h3>Funfacts2</h3>
                        <Funfacts2 />
                        <hr />
        
                        <h3>Funfacts3</h3>
                        <Funfacts3 />
                        <hr />
        
                        <h3>Funfacts4</h3>
                        <Funfacts4 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Offers")} style={{ cursor: "pointer" }}>
                    Offers
                </h2>
                {activeGroup === "Offers" && (
                    <div>
    
                        <h3>Offer1</h3>
                        <Offer1 />
                        <hr />
                        <h3>Offer2</h3>
                        <Offer2 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Portfolio")} style={{ cursor: "pointer" }}>
                    Portfolio
                </h2>
                {activeGroup === "Portfolio" && (
                    <div>
    
                        <h3>Portfolio1</h3>
                        <Portfolio1 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Process")} style={{ cursor: "pointer" }}>
                    Process
                </h2>
                {activeGroup === "Process" && (
                    <div>
    
                        <h3>Process1</h3>
                        <Process1 />
                        <hr />
        
                        <h3>Process2</h3>
                        <Process2 />
                        <hr />
        
                        <h3>Process3</h3>
                        <Process3 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Services")} style={{ cursor: "pointer" }}>
                    Services
                </h2>
                {activeGroup === "Services" && (
                    <div>
    
                        <h3>Service1</h3>
                        <Service1 />
                        <hr />
        
                        <h3>Service2</h3>
                        <Service2 />
                        <hr />
        
                        <h3>Service3</h3>
                        <Service3 />
                        <hr />
        
                        <h3>Service4</h3>
                        <Service4 />
                        <hr />
        
                        <h3>Service5</h3>
                        <Service5 />
                        <hr />
        
                        <h3>Service6</h3>
                        <Service6 />
                        <hr />
        
                        <h3>Service7</h3>
                        <Service7 />
                        <hr />
        
                        <h3>Service8</h3>
                        <Service8 />
                        <hr />
        
                        <h3>Service9</h3>
                        <Service9 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Sliders")} style={{ cursor: "pointer" }}>
                    Sliders
                </h2>
                {activeGroup === "Sliders" && (
                    <div>
    
                        <h3>Slider1</h3>
                        <Slider1 />
                        <hr />
        
                        <h3>Slider2</h3>
                        <Slider2 />
                        <hr />
        
                        <h3>Slider3</h3>
                        <Slider3 />
                        <hr />
        
                        <h3>Slider4</h3>
                        <Slider4 />
                        <hr />
        
                        <h3>Slider5</h3>
                        <Slider5 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Subsidiaries")} style={{ cursor: "pointer" }}>
                    Subsidiaries
                </h2>
                {activeGroup === "Subsidiaries" && (
                    <div>
    
                        <h3>subsidiaries</h3>
                        <Subsidiaries />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Teams")} style={{ cursor: "pointer" }}>
                    Teams
                </h2>
                {activeGroup === "Teams" && (
                    <div>
    
                        <h3>Team1</h3>
                        <Team1 />
                        <hr />
        
                        <h3>Team2</h3>
                        <Team2 />
                        <hr />
        
                    </div>
                )}
            </div>
    
            <div>
                <h2 onClick={() => toggleGroup("Testimonials")} style={{ cursor: "pointer" }}>
                    Testimonials
                </h2>
                {activeGroup === "Testimonials" && (
                    <div>
    
                        <h3>Testimonial1</h3>
                        <Testimonial1 />
                        <hr />
        
                        <h3>Testimonial2</h3>
                        <Testimonial2 />
                        <hr />
        
                        <h3>Testimonial3</h3>
                        <Testimonial3 />
                        <hr />
        
                        <h3>Testimonial4</h3>
                        <Testimonial4 />
                        <hr />
        
                        <h3>Testimonial5</h3>
                        <Testimonial5 />
                        <hr />
        
                    </div>
                )}
            </div>
    
        </div>
    );
}

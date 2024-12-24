import React, { useState } from "react";

export default function SliderHighlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "SARTAX",
      name: "SAR Tax & Management Consultant",
      description:
        "Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.",
      image: "/assets/images/SAR/DSC_2200.jpg",
      spotifyLink:
        "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
    },
    {
      id: "PKM",
      name: "Padjadjaran Karya Mandiri",
      description:
        "Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album 'Langata'.",
      image: "/assets/images/SAR/DSC_2450.jpg",
      spotifyLink:
        "https://open.spotify.com/artist/0aA1GTrIMutjIh4GlPPUVN?si=N6CkDtcYQx-O4Zehl6CPag",
    },
    {
      id: "SSN",
      name: "Sarana Solusi Nawala",
      description:
        "Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album 'Langata'.",
      image: "/assets/images/SAR/DSC_2352.jpg",
      spotifyLink:
        "https://open.spotify.com/artist/0aA1GTrIMutjIh4GlPPUVN?si=N6CkDtcYQx-O4Zehl6CPag",
    },
    {
      id: "Naryadanta",
      name: "Naryadanta Consulting",
      description:
        "Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album 'Langata'.",
      image: "/assets/images/SAR/DSC_9647.jpg",
      spotifyLink:
        "https://open.spotify.com/artist/0aA1GTrIMutjIh4GlPPUVN?si=N6CkDtcYQx-O4Zehl6CPag",
    }
  ];

  return (
    <div className="SliderHighlight">
      <div id="Services">
        <ul className="services">
          {services.map((service, index) => (
            <li
              key={service.id}
              role="button"
              className={index === activeIndex ? "active" : ""}
              style={{ backgroundImage: `url(${service.image})` }}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="title-white">{service.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2 className="title-white">{service.name}</h2>
                    <p className="desc-off-white">{service.description}</p>
                    <a
                      href={service.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artist-profile-link md:hidden"
                    >
                      <div class="button-wrapper">
                        <a class="shine-button">
                          Learn More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

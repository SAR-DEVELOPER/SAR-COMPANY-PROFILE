import React, { useState } from "react";

export default function Service3() {
  const [expanded, setExpanded] = useState(null); // State to track expanded box

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle between expanded and collapsed
  };

  const companies = [
    { name: "SAR Tax and Management Consultant", description: "Detailed content about SAR Tax and Management Consultant." },
    { name: "Padjadjaran Karya Mandiri Institute", description: "Detailed content about Padjadjaran Karya Mandiri Institute." },
    { name: "Sarana Solusi Nawala Consulting", description: "Detailed content about Sarana Solusi Nawala Consulting." },
    { name: "Naryadanta Accounting Firm", description: "Detailed content about Naryadanta Accounting Firm." },
  ];

  return (
    <section className="service-section position-relative bg_2 overflow-hidden">
      <div className="pd_top_90" />
      <div className="ab_img_left_top z_0 mr_top_minus_150">
        <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
      </div>
      <div className="container subsidiares-list">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center color_white type_one">
              <h4 className="sm_title">Our Companies</h4>
              <div className="title_whole">
                <h2 className="title">There is Always One for Your Need</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_40" />

        {/* Expanded Content */}
        <div
          className={`row expanded-content ${expanded !== null ? "expanded-visible" : "expanded-hidden"}`}
        >
          {expanded !== null && (
            <div className="col-12">
              <div className="expanded-box">
                <h4>{companies[expanded].name}</h4>
                <p>{companies[expanded].description}</p>
                <button className="rd_more" onClick={() => setExpanded(null)}>
                  Show Less
                </button>
              </div>
            </div>
          )}
        </div>

        {/* List of Boxes */}
        <div className="row subsidiaries-row">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 col-xs-12 ${
                expanded === index ? "hidden" : ""
              }`}
            >
              <div className="icon_box_only type_one">
                <div className="icon_box_in trans">
                  <div className="title_22">
                    <h4>{company.name}</h4>
                  </div>
                  <button className="rd_more" onClick={() => toggleExpand(index)}>
                    Read More
                    <i className="icontb fi-rs-arrow-small-right" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pd_bottom_40" />
      <div className="ab_img_right_bottom z_0 mr_bottom_minus_250">
        <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
      </div>
      <style jsx>{`
        .expanded-content {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.5s ease, opacity 0.5s ease;
        }
        .expanded-visible {
          max-height: 300px; /* Adjust based on content size */
          opacity: 1;
        }
        .expanded-box {
          padding: 20px;
          background: #f1f1f1;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .rd_more {
          cursor: pointer;
          background: none;
          border: none;
          color: #007bff;
          text-decoration: underline;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </section>
  );
}

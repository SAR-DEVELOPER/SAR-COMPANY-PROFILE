const fs = require("fs");
const path = require("path");

// Base directory for your components
const baseDir = "D:/personal/development area/nextJS/production/SAR-COMPANY-PROFILE/components/sections";

// Output file
const outputFile = "Showroom.js";

// Group mappings based on prefixes (adjust as needed)
const groups = {
    About: "About",
    Blog: "Blog",
    Client: "Client",
    Content: "Content",
    Cta: "Call to Action",
    Faq: "FAQ",
    Form: "Forms",
    Funfacts: "Fun Facts",
    Offer: "Offers",
    Portfolio: "Portfolio",
    Process: "Process",
    Service: "Services",
    Slider: "Sliders",
    Team: "Teams",
    Testimonial: "Testimonials",
    Analysis: "Analysis",
    Banner: "Banner",
    subsidiaries: "Subsidiaries"
};

// Read all files in the directory
const files = fs.readdirSync(baseDir);

// Group files by their prefix
const groupedComponents = {};
files.forEach(file => {
    const match = file.match(/^(.*?)(\d*?)\.js$/); // Match prefix (e.g., About, Blog)
    if (match) {
        const [_, prefix] = match;
        const groupName = groups[prefix] || "Miscellaneous";
        if (!groupedComponents[groupName]) {
            groupedComponents[groupName] = [];
        }
        groupedComponents[groupName].push(file);
    }
});

// Generate imports and JSX
let imports = "";
let jsx = `
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
`;
Object.keys(groupedComponents).forEach(group => {
    jsx += `
            <div>
                <h2 onClick={() => toggleGroup("${group}")} style={{ cursor: "pointer" }}>
                    ${group}
                </h2>
                {activeGroup === "${group}" && (
                    <div>
    `;
    groupedComponents[group].forEach(file => {
        const componentName = path.basename(file, ".js");
        imports += `import ${componentName} from "@/components/sections/${componentName}";\n`;
        jsx += `
                        <h3>${componentName}</h3>
                        <${componentName} />
                        <hr />
        `;
    });
    jsx += `
                    </div>
                )}
            </div>
    `;
});
jsx += `
        </div>
    );
}
`;

// Write the component to a file
const output = imports + jsx;
fs.writeFileSync(outputFile, output);

console.log(`Showroom component generated at ${outputFile}`);

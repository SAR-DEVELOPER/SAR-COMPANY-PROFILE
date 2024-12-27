//components/layout/navbarNav.js
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function NavbarNav({ LangData }) {
    const { language, changeLanguage } = useLanguage();
    const [langData, setLangData] = useState({}); // Initialize an empty object

    // Update the state when LangData changes
    useEffect(() => {
        if (LangData) {
            setLangData(LangData);
        }
    }, [LangData]);

    const handleToggle = () => {
        const newLang = language === "id" ? "en" : "id";
        changeLanguage(newLang); // Update the language via the context
    };

    return (
        <ul className="navbar_nav navbar-custom">
            <li className="menu-item nav-item">
                <Link href="/about-us" className="nav_link">
                    <span className="text-link">{langData.about || "About Us"}</span>
                </Link>
            </li>
            <li className="menu-item nav-item">
                <Link href="/solution" className="nav_link">
                    <span className="text-link">{langData.solution || "Solution"}</span>
                </Link>
            </li>
            <li className="menu-item nav-item">
                <Link href="/subsidiaries" className="nav_link">
                    <span className="text-link">{langData.subsidiaries || "Subsidiaries"}</span>
                </Link>
            </li>
            <li className="menu-item nav-item">
                <Link href="/clients" className="nav_link">
                    <span className="text-link">{langData.clients || "Clients"}</span>
                </Link>
            </li>
            <li className="menu-item nav-item">
                <Link href="/contact" className="nav_link">
                    <span className="text-link">{langData.contact || "Contact"}</span>
                </Link>
            </li>
            <li className="menu-item nav-item">
                <div className="switch">
                    <input
                        id="language-toggle"
                        className="check-toggle check-toggle-round-flat"
                        type="checkbox"
                        checked={language === "id"}
                        onChange={handleToggle}
                    />
                    <label htmlFor="language-toggle"></label>
                    <span className="on mt-3">ID</span>
                    <span className="off mt-3">EN</span>
                </div>
            </li>
        </ul>
    );
}

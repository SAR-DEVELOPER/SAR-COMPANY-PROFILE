import Link from "next/link"

export default function NavbarNav() {

    return (
        <>

            <ul className="navbar_nav navbar-custom">
                <li className="menu-item  nav-item">
                    <Link href="/" className="nav_link">
                        <span className="text-link">
                            About Us
                        </span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/" className="nav_link">
                        <span className="text-link">
                            Solution
                        </span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/" className="nav_link">
                        <span className="text-link">
                            Subsidiaries
                        </span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/" className="nav_link">
                        <span className="text-link">
                            Client
                        </span>
                    </Link>
                </li>
                {/* <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Portfolio
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-1" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-2" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-details" className="nav_link">
                                <span className="text-link">
                                    Portfolio Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li> */}
                
                <li className="menu-item  nav-item">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

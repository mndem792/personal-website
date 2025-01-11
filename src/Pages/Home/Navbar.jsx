import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

function Navbar() {
    const {pathname} = useLocation();

    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }


    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu
            }  
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        if(window.innerWidth < 1200)
        {
            closeMenu
        }
    }, [])

    return (
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navbar--logo-container">
                    <img className="navbar--logo-image" src="./img/merab_malishava_2in2in_retouched.jpg"/>
                    <div className="navbar--logo-text">
                        <p className="navbar--logo-text">Merab Malishava</p>
                        <p>Embedded & Software Engineer</p>
                    </div>
                </div>
            </Link>

            <a 
                className={`nav__hamburger ${navActive? "active" : ""}`} 
                onClick={toggleNav}
            >
            <span className="nav__hamburger__line">
            </span>
            <span className="nav__hamburger__line">
            </span>
            <span className="nav__hamburger__line">
            </span>
            </a>
            <div className={`navbar--items ${navActive? "active" : ""}`}>
                <ul>
                <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="/"
                            className="navbar--content"
                        >
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="/aboutme"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav-icons">
                {/* Google Scholar */}
                <a href="https://scholar.google.com/citations?user=LOKsg1gAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                <FaGoogleScholar className="nav-icon" color="4d90fe" />
                </a>
                {/*Github*/}
                <a href="https://github.com/mndem792/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="nav-icon" color="171515" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/merab-malishava-aa1aa0140/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="nav-icon" color="0077b5" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
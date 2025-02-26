import logo from "../assets/Gh-Icon.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between py-4 sm:py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
                </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl mt-2 sm:mt-0">
                <a href="https://www.linkedin.com/in/giap-nguyen-08b551234/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/giaphoang" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Github">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/__ngzap/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
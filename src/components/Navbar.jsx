import logo from "../assets/rashii.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-10">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo" className="w-24 text-white" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl lg:px-9">
            <FaGithub/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaXTwitter/>
        </div>
    </nav>
  )
}   

export default Navbar
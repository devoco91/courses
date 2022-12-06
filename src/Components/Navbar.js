import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import  Logo from '../images/logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a href="/">
			<img src={Logo} alt="" />
			</a>
			
			<nav ref={navRef}>
				<a href="https://lasop.net">Home</a>
				<a href="https://lasop.net">Courses</a>
				{/* <a href="/#">Blog</a> */}
				<a href="https://lasop.net/company">About us</a>
				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			{/* <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button> */}
		</header>
	);
}

export default Navbar;

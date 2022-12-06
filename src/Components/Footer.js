import React from 'react'
import "../Styles/Footer.css";

function Footer() {
  return (
    <div>
        
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="https://lasop.net/company">about us</a></li>
  	 				<li><a href="https://lasop.net">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="https://lasop.net/FAQPage">FAQ</a></li>
  	 				{/* <li><a href="#">shipping</a></li> */}
  	 				{/* <li><a href="#">returns</a></li> */}
  	 				{/* <li><a href="#">order status</a></li> */}
  	 				<li><a href="https://lasop.net/install">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Mode of Study</h4>
  	 			<ul>
  	 				<li><a href="#">Weekday</a></li>
  	 				<li><a href="#">Weekend</a></li>
  	 				<li><a href="#">Online</a></li>
  	 				{/* <li><a href="#">dress</a></li> */}
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/lasopdotnet" target="_blank"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com/Lasopdotnet" target="_blank"><i className="fab fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com/lasopdotnet" target="_blank"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://linkedin.com/company/lasopdotnet" target="_blank"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer
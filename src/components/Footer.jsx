import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-branding">
          <h3>Victor Okuna for MP – Suna East</h3>
          <p>Engineer. Environmental Advocate. Solar Energy Champion.</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://facebook.com/okuna91" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
        
        {/* Copyright */}
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Victor Okuna Campaign. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

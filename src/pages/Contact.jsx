import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="section contact-section">
      <h1>Contact Victor</h1>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> contact@victorokuna.org</p>
          <p><strong>Phone:</strong> +254 700 000 000</p>

          <div className="social-icons">
            {/* <a href="https://facebook.com/okuna91" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

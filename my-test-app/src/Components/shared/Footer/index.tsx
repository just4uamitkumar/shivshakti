const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p>
          Follow us on social media:
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact-us">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;

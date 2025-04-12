
import { Link } from 'react-router'

const Nav: React.FC = () => {

  return (
    <>
      <nav>
        <ul>
          
          <li>
            <Link to="/about">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/jyotirlinga">
              Jyotirlinga
            </Link>
          </li>
        
          <li>
            <Link  to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

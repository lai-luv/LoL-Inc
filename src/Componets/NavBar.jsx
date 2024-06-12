import { Link } from "react-router-dom";


const NavBar = () => {
    // const path = window.location.pathname
  return (
    <div className="nav">
      <Link className="site-title" to="/">
       <span>L</span>
       <span>o</span>
       <span>L</span>
       <span>.</span>
       <span>I</span>
       <span>n</span>
       <span>c</span>
        
      </Link>
      <ul>
        <li>
          <Link to="/Calendar">Calender</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us </Link>
        </li>
        <li>
          <Link to="/Reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

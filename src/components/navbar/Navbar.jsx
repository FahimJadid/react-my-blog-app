import './navbar.css';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from 'react-icons/ai';

import navbarImg from '../../assets/profile.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <AiFillFacebook className="navbarIcon" />
        <AiFillLinkedin className="navbarIcon" />
        <AiFillInstagram className="navbarIcon" />
        <AiFillTwitterSquare className="navbarIcon" />
      </div>
      <div className="topMiddle">
        <ul className="navbarList">
          <li className="navbarListItem">Home</li>
          <li className="navbarListItem">About</li>
          <li className="navbarListItem">Contact</li>
          <li className="navbarListItem">Create</li>
          <li className="navbarListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="navbarImg" src={navbarImg} alt="profile" />
        <AiOutlineSearch className="navbarSearchIcon" />
      </div>
    </div>
  );
};

export default Navbar;

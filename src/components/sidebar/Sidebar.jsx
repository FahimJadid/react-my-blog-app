import './sidebar.css';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

import sidebarImg from '../../assets/profile.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="sidebarImg" src={sidebarImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas
          accusamus quaerat minima nam aspernatur?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Technology</li>
          <li className="sidebarListItem">Lifestyle</li>
          <li className="sidebarListItem">Education</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Entertainment</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <AiFillFacebook className="sidebarIcon" />
          <AiFillLinkedin className="sidebarIcon" />
          <AiFillInstagram className="sidebarIcon" />
          <AiFillTwitterSquare className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

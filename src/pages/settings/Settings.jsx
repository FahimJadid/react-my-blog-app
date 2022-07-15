import './settings.css';
import Sidebar from './../../components/sidebar/Sidebar';
import settingsImg from '../../assets/profile.jpg';
import { FaUserCircle } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfile">
            <img className="settingsImg" src={settingsImg} alt="" />
            <label htmlFor="fileInput">
              <FaUserCircle className="settingsProfileIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="example" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;

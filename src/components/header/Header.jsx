import './header.css';
import headerImg from '../../assets/heaven.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerImg} alt="Beach" />
    </div>
  );
};

export default Header;

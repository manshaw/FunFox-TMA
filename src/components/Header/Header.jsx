import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ title, pictureUrl }) => {
  return (
    <div className="header">
      <div className="container">
        <img className="header-logo" src="/logo.png" alt="logo" />
        <div className="header-title">{title}</div>
        <img className="user-img" src={pictureUrl} alt="user" />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  pictureUrl: PropTypes.string,
};

export default Header;

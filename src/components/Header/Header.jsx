import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img className="header-logo" src="/logo.png" alt="logo" />
        <div className="header-title">Frontend Development Group</div>
        <img className="user-img" src="/pic.jpg" alt="user" />
      </div>
    </div>
  );
};

export default Header;

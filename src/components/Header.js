import avatar from "../assets/images/20198.jpg";
import { BiSearch, BiEnvelope, BiBell } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <nav className="top_nav">
        <div className="logo row">
          <h3>Store Admin</h3>
        </div>
        <div className="search_box row">
          <BiSearch />
          <input type="text" placeholder="search..." />
        </div>
        <div className="user">
          <BiEnvelope />
          <BiBell />
          <div className="profile row">
            <img src={avatar} alt="profile" />
            <h5>MM.Sabbaghi </h5>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

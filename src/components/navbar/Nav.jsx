import "./Nav.css";

function Nav() {
  return (
    <div className="navBar">
      <div className="firstNav">
        <img src="./piggyvestlogo.svg" alt="logo" />
        <div className="nav-links">
          <a href="#">Save</a>
          <a href="#">Invest</a>
          <a href="#">Stories</a>
          <a href="#">FAQs</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="secondNav">
        <a href="#" className="btn1">
          Sign in
        </a>
        <a href="#" className="btn2">
          Create free account
        </a>
        <img src="./menu.png" className="menu" alt="hamburger" />
      </div>
    </div>
  );
}
export default Nav;

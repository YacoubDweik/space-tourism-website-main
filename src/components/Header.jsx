import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // 🔥 Whenever the route changes, close the sidebar
  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  return (
    <div className="header-wrapper">
      <header className="header">
        <Link className="header__logo" to="/">
          <img className="logo" src={`assets/images/shared/logo.svg`} alt="" aria-hidden="true" />
        </Link>
        <span className="header__line"></span>
        <button
          id="menu-toggle"
          className="header__navbar--open"
          aria-label="click here to open the navbar"
          aria-controls="sidebar-nav"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(true)}>
          <img src={`assets/images/shared/icon-hamburger.svg`} alt="" aria-hidden="true" />
        </button>
        <nav
          id="sidebar-nav"
          className={`nav ${isExpanded ? "expanded" : ""}`}
          role="navigation"
          aria-label="Main navigation">
          <button
            id="menu-close"
            className="nav__navbar--close"
            aria-label="click here to close the navbar"
            onClick={() => setIsExpanded(false)}>
            <img src={`assets/images/shared/icon-close.svg`} alt="" aria-hidden="true" />
          </button>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="link" to="/">
                <span className="link__number">00</span>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="link" to="/destination">
                <span className="link__number">01</span>
                Destination
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="link" to="/crew">
                <span className="link__number">02</span>
                Crew
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="link" to="/technology">
                <span className="link__number">03</span>
                Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

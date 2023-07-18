import React from "react";

function Header() {
  return (
    <header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

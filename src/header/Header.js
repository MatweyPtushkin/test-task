import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <p>Тестовое задание</p>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;

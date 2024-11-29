import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { LINKS } from "./Constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-header py-2 d-flex align-items-center">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <h1 className="name me-4">Yunus Emre Bayraktar</h1>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/" className="navigation-link mx-2">Home</Link>
          <Link to="/contact" className="navigation-link mx-2">Contact</Link>
          <Link to="/pics" className="navigation-link mx-2">Pics</Link>
          <Link to="/books" className="navigation-link mx-2">Books</Link>
          <Link to="/work-education" className="navigation-link mx-2">Work / Education History</Link>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="navigation-link">
            <FaLinkedin className="icon-header" />
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="navigation-link">
            <FaGithub className="icon-header" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
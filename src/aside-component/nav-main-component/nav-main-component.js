import React from 'react';

const NavMainComponent = ({ userId }) => (
    <nav className="document__aside-nav">
        <ul className="l-nav">
            <li className="l-nav__item">
                <a className="l-nav__link _active" href="#">Home</a>
            </li>
            <li className="l-nav__item">
                <a className="l-nav__link" href="#">Work</a>
            </li>
            <li className="l-nav__item">
                <a className="l-nav__link" href="#">About</a>
            </li>
            <li className="l-nav__item">
                <a className="l-nav__link" href="#">Blog</a>
            </li>
            <li className="l-nav__item">
                <a className="l-nav__link" href="#">Services</a>
            </li>
            <li className="l-nav__item">
                <a className="l-nav__link" href="#">Contact</a>
            </li>
        </ul>
    </nav>
);

export default NavMainComponent;

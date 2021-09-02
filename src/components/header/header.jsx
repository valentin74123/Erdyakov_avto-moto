import React from "react";
import Logo from '../logo/logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />

        <nav className="header__navigation navigation">
          <ul className="navigation__list list">
            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Автомобили</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Контакты</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Услуги</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

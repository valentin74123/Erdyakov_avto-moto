import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__navigation navigation">
          <ul className="navigation__list navigation__list--footer list">
            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Корпоративным клиентам</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Клиентам</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Аренда авто</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Каршеринг</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Как продать авто</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Trade-in</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Test drive</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

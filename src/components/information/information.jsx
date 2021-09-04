import React from "react";

const Information = () => {
  return (
    <section className="information">
      <h3 className="information__title text-margin">Марпех 11</h3>

      <ul className="information__indicators indicators list">
        <li className="indicators__item indicators__item--oil">бензин</li>
        <li className="indicators__item indicators__item--control-type">механика</li>
        <li className="indicators__item indicators__item--speed">100 л.с.</li>
        <li className="indicators__item indicators__item--engine">1.4 л</li>
      </ul>

      <div className="information__price">
        <p className="information__new-price text-margin">2 300 000 ₽</p>
        <p className="information__old-price text-margin">2 &nbsp;400 000 ₽</p>
      </div>

      <div className="information__buttons">
        <a className="information__application-button link" href="#">Oставить заявку</a>

        <a className="information__credit-button link" href="#">В кредит от 11&nbsp;000&nbsp;₽</a>
      </div>
    </section>
  );
};

export default Information;

import React from "react";

const Specifications = () => {
  return (
    <section className="specifications">
      <h2 className="visually-hidden">Характеристики</h2>
      <ul className="specifications__list list">
        <li className="specifications__item">
          <p className="specifications__description text-margin">Трансмиссия</p>
          <p className="specifications__value text-margin">Роботизированная</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Мощность двигателя, л.с.</p>
          <p className="specifications__value text-margin">249</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Тип двигателя</p>
          <p className="specifications__value text-margin">Бензиновый</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Привод</p>
          <p className="specifications__value text-margin">Полный</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Объем двигателя, л</p>
          <p className="specifications__value text-margin">2.4</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Макс. крутящий момент</p>
          <p className="specifications__value text-margin">370/4500</p>
        </li>

        <li className="specifications__item">
          <p className="specifications__description text-margin">Количество цилиндров</p>
          <p className="specifications__value text-margin">4</p>
        </li>
      </ul>
    </section>
  );
};

export default Specifications;

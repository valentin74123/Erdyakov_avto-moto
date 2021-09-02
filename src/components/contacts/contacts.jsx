import React from "react";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <ul className="contacts__list list">
        <li className="contacts__item">
          <p className="contacts__title contacts__title--address text-margin">Адрес</p>
          <p className="contacts__description text-margin">
            Санкт-Петербург, набережная&nbsp;реки Карповки, дом 5
          </p>
        </li>

        <li className="contacts__item">
          <p className="contacts__title text-margin">Режим работы</p>
          <p className="contacts__description text-margin">Ежедневно, с 10:00 до 21:00</p>
        </li>

        <li className="contacts__item">
          <p className="contacts__title text-margin">Телефон</p>
          <a className="contacts__description contacts__description--link link" href="tel:88003335599">8 (800) 333-55-99</a>
        </li>

        <li className="contacts__item">
          <p className="contacts__title text-margin">E-mail</p>
          <a className="contacts__description contacts__description--link link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>

      <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae42e0f6cc2ef4331b64235148ec2aff9cff3df54826d6aad5959ae45ba30c1ec&amp;source=constructor"
        width="431" height="271" title="Набережная реки Карповки, дом 5">
      </iframe>
    </section>
  );
};

export default Contacts;

import React from "react";
import PropTypes from "prop-types";
import {Repeat} from "../../utils/common";

const ReviewForm = (props) => {
  const {
    onReviewFormClose,
    onValueChange,
    onBlurValidationCheck,
    onSubmit
  } = props;

  return (
    <section className="review-form" onClick={onReviewFormClose}>
      <div className="review-form__wrapper">
        <h3 className="review-form__title text-margin">Оставить отзыв</h3>

        <button className="review-form__close-button" type="button" onClick={onReviewFormClose}>
          <span className="visually-hidden">Закрыть окно</span>
        </button>

        <form
          action="#"
          className="review-form__form"
          onSubmit={onSubmit}
          onClick={(evt) => evt.stopPropagation()}
        >
          <div className="review-form__required-wrapper review-form__required-wrapper--author" onBlur={onBlurValidationCheck}>
            <label htmlFor="author">
              <span className="review-form__required-message">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
              <span className="visually-hidden">Имя</span>
            </label>

            <input
              onChange={onValueChange}
              className="review-form__input review-form__input--required review-form__input--author"
              type="text"
              name="author"
              id="author"
              placeholder="Имя"
              autoComplete="off"
              value={localStorage.getItem(`author`) !== null ? localStorage.getItem(`author`) : ``}
              autoFocus/>
          </div>

          <label className="visually-hidden" htmlFor="advantages">Достоинства</label>
          <input
            onChange={onValueChange}
            className="review-form__input"
            type="text"
            id="advantages"
            name="advantages"
            placeholder="Достоинства"
            autoComplete="off"
            value={localStorage.getItem(`advantages`) !== null ? localStorage.getItem(`advantages`) : ``}
          />

          <label className="visually-hidden" htmlFor="disadvantages">Недостатки</label>
          <input
            onChange={onValueChange}
            className="review-form__input"
            type="text"
            id="disadvantages"
            name="disadvantages"
            placeholder="Недостатки"
            autoComplete="off"
            value={localStorage.getItem(`disadvantages`) !== null ? localStorage.getItem(`disadvantages`) : ``}
          />

          <div className="review-form__rating">
            <span className="review-form__rating-title">Оцените товар:</span>
            <div>
              <Repeat numberOfRepetitions={5}>
                {(i) => (
                  <input
                    key={i}
                    className="review-form__radio"
                    type="radio"
                    id={`star-${i + 1}`}
                    name="rating"
                    value={i + 1}
                    defaultChecked={localStorage.getItem(`rating`) === `${i + 1}` ? `defaultChecked` : ``}
                    onChange={onValueChange}
                  />
                )}
              </Repeat>

              <Repeat numberOfRepetitions={5}>
                {(i) => (
                  <label key={i} className="review-form__star" htmlFor={`star-${i + 1}`} tabIndex="0">
                    <span className="visually-hidden">Рейтинг: {i + 1}</span>
                  </label>
                )}
              </Repeat>
            </div>
          </div>

          <div className="review-form__required-wrapper review-form__required-wrapper--textarea" onBlur={onBlurValidationCheck}>
            <label htmlFor="comment">
              <span className="review-form__required-message">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
              <span className="visually-hidden">Комментарий</span>
            </label>

            <textarea
              onChange={onValueChange}
              className="review-form__input review-form__input--required review-form__input--comment"
              type="text"
              id="comment"
              name="comment"
              placeholder="Комментарий"
              value={localStorage.getItem(`comment`) !== null ? localStorage.getItem(`comment`) : ``}
            />
          </div>

          <button className="review-form__submit-button" type="submit">Оставить отзыв</button>
        </form>
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  onReviewFormClose: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;

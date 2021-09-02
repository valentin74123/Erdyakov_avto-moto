import React from "react";
import PropTypes from "prop-types";
import {withReviews} from "../../hocs/with-reviews";
import ReviewForm from "../review-form/review-form";

const Reviews = (props) => {
  const {
    reviews,
    isFormOpened,
    onReviewFormOpen,
    onReviewFormClose,
    onValueChange,
    onBlurValidationCheck,
    onSubmit
  } = props;

  return (
    <section className="reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <div className="reviews__button-element">
        <button className="reviews__review-button link" onClick={onReviewFormOpen}>Оставить отзыв</button>
      </div>

      <ul className="reviews__list list">
        {reviews.map((review, i) => (
          <li key={review + i} className="reviews__item">
            <h3 className="reviews__name text-margin">{review.author}</h3>

            <div className="reviews__element reviews__element--advantages">
              <p className="reviews__text reviews__text--bold text-margin">Достоинства</p>
              <p className="reviews__text text-margin">{review.advantages}</p>
            </div>

            <div className="reviews__element reviews__element--disadvantages">
              <p className="reviews__text reviews__text--bold text-margin">Недостатки</p>
              <p className="reviews__text text-margin">{review.disadvantages}</p>
            </div>

            <div className="reviews__element reviews__element--comment">
              <p className="reviews__text reviews__text--bold text-margin">Комментарий</p>
              <p className="reviews__text text-margin">{review.comment}</p>
            </div>

            <div className="reviews__element reviews__element--rating">
              <div className="reviews__rating">
                <span className={`reviews__star ${review.rating >= 1 ? `reviews__star--active` : ``}`}></span>
                <span className={`reviews__star ${review.rating >= 2 ? `reviews__star--active` : ``}`}></span>
                <span className={`reviews__star ${review.rating >= 3 ? `reviews__star--active` : ``}`}></span>
                <span className={`reviews__star ${review.rating >= 4 ? `reviews__star--active` : ``}`}></span>
                <span className={`reviews__star ${review.rating >= 5 ? `reviews__star--active` : ``}`}></span>
              </div>
              <p className="reviews__advises text-margin">Советует</p>
            </div>

            <div className="reviews__element reviews__element--date">
              <p className="reviews__date text-margin">{review.date}</p>
              <a className="reviews__to-answer link" href="#">Ответить</a>
            </div>
          </li>
        ))}
      </ul>

      {isFormOpened && (
        <ReviewForm
          onReviewFormClose={onReviewFormClose}
          onValueChange={onValueChange}
          onBlurValidationCheck={onBlurValidationCheck}
          onSubmit={onSubmit}
        />
      )}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  isFormOpened: PropTypes.bool.isRequired,
  onReviewFormOpen: PropTypes.func.isRequired,
  onReviewFormClose: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withReviews(Reviews);

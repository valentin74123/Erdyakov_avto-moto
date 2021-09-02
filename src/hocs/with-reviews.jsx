import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import moment from "moment";
import {KeyCode} from "../const";
import {addReview} from "../store/actions";

export const withReviews = (Component) => {
  class WithReviews extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFormOpened: false,
        author: ``,
        advantages: ``,
        disadvantages: ``,
        rating: ``,
        comment: ``
      };

      this.onReviewFormOpen = this.onReviewFormOpen.bind(this);
      this.onReviewFormClose = this.onReviewFormClose.bind(this);
      this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);

      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onClosePopupKeydown(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.onReviewFormClose();
      }
    }

    onReviewFormOpen() {
      this.setState({isFormOpened: true});
      document.addEventListener(`keydown`, this.onClosePopupKeydown);
      document.body.style.overflow = `hidden`;
    }

    onReviewFormClose() {
      this.setState({isFormOpened: false});
      document.removeEventListener(`keydown`, this.onClosePopupKeydown);
      document.body.style.overflow = `auto`;
    }

    onValueChange(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: value});
      localStorage.setItem(name, value);
    }

    onSubmit(evt) {
      evt.preventDefault();

      let isValid = true;

      const requiredFields = evt.target.querySelectorAll(`.review-form__input--required`);

      for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === ``) {
          evt.currentTarget.querySelector(`.review-form__required-message--${requiredFields[i].name}`).style.display = `block`;
          requiredFields[i].classList.add(`review-form__input--validation-error`);

          isValid = false;
        }
      }

      if (!isValid) {
        return;
      }

      this.props.addReview({
        author: this.state.author,
        advantages: this.state.advantages,
        disadvantages: this.state.disadvantages,
        rating: this.state.rating,
        comment: this.state.comment,
        date: moment(Date.parse(new Date())).fromNow(),
      });

      localStorage.removeItem(`author`);
      localStorage.removeItem(`advantages`);
      localStorage.removeItem(`disadvantages`);
      localStorage.removeItem(`rating`);
      localStorage.removeItem(`comment`);

      this.onReviewFormClose();
    }

    onBlurValidationCheck(evt) {
      const {value} = evt.target;

      if (value === ``) {
        evt.currentTarget.querySelector(`.review-form__required-message`).style.display = `block`;
        evt.currentTarget.querySelector(`.review-form__input`).classList.add(`review-form__input--validation-error`);
        return;
      }

      evt.currentTarget.querySelector(`.review-form__required-message`).style.display = `none`;
      evt.currentTarget.querySelector(`.review-form__input`).classList.remove(`review-form__input--validation-error`);
    }

    render() {
      return (
        <Component
          {...this.props}
          isFormOpened={this.state.isFormOpened}
          onReviewFormOpen={this.onReviewFormOpen}
          onReviewFormClose={this.onReviewFormClose}
          onValueChange={this.onValueChange}
          onSubmit={this.onSubmit}
          onBlurValidationCheck={this.onBlurValidationCheck}
        />
      );
    }
  }

  WithReviews.propTypes = {
    addReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviews: state.REVIEWS.reviews
  });

  const mapDispatchToProps = (dispatch) => ({
    addReview(review) {
      dispatch(addReview(review));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};

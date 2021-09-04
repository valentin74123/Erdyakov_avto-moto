import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {promoSlideLeft, promoSlideRight} from "../../store/actions";
import {getPreviousElement, getNextElement} from "../../utils/common";

const Slider = (props) => {
  const {
    previews,
    slides,
    currentSlide,
    onLeftSlideClick,
    onRightSlideClick,
    isLeftButtonDisabled,
    isRightButtonDisabled
  } = props;

  return (
    <section className="slider">
      <div className="slider__img-wrapper">
        <img className="slider__img img" src={currentSlide} width="600" height="375" alt="Марпех 11" />
      </div>

      <div className="slider__wrapper">
        <button
          className="slider__button"
          disabled={`${isLeftButtonDisabled ? `disabled` : ``}`}
          type="button"
          onClick={() => {
            onLeftSlideClick(slides, currentSlide);
          }}
        >
          <span className="visually-hidden">Предыдущий слайд</span>
          <svg className="slider__button-svg slider__button-svg--left" width="20" height="13" viewBox="0 0 20 13" fill="none">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
          </svg>
        </button>

        <div className="slider__images">
          {previews.map((preview, i) => (
            <div key={preview + i} className="slider__small-img-wrapper">
              <img className="slider__small-img img" src={preview} width="128" height="80" alt="Марпех 11" />
            </div>
          ))}
        </div>

        <button
          className="slider__button"
          disabled={`${isRightButtonDisabled ? `disabled` : ``}`}
          type="button"
          onClick={() => {
            onRightSlideClick(slides, currentSlide);
          }}
        >
          <span className="visually-hidden">Следущий слайд</span>
          <svg className="slider__button-svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

Slider.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  slides: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentSlide: PropTypes.string.isRequired,
  onLeftSlideClick: PropTypes.func.isRequired,
  onRightSlideClick: PropTypes.func.isRequired,
  isLeftButtonDisabled: PropTypes.bool.isRequired,
  isRightButtonDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  previews: state.SLIDER.previews,
  slides: state.SLIDER.slides,
  currentSlide: state.SLIDER.currentSlide,
  isLeftButtonDisabled: state.SLIDER.isLeftSliderButtonDisabled,
  isRightButtonDisabled: state.SLIDER.isRightSliderButtonDisabled
});

const mapDispatchToProps = (dispatch) => ({
  onLeftSlideClick(slides, currentSlide) {
    let newSlide = getPreviousElement(slides, currentSlide);
    let isLeftSliderButtonDisabled = getPreviousElement(slides, currentSlide) === slides[0];
    dispatch(promoSlideLeft(newSlide, isLeftSliderButtonDisabled));
  },
  onRightSlideClick(slides, currentSlide) {
    let newSlide = getNextElement(slides, currentSlide);
    let isRightSliderButtonDisabled = getNextElement(slides, currentSlide) === slides[slides.length - 1];
    dispatch(promoSlideRight(newSlide, isRightSliderButtonDisabled));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

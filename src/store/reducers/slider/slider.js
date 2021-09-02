import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {SliderImages} from '../../../const';

const initialState = {
  previews: SliderImages,
  slides: SliderImages,
  currentSlide: SliderImages[0],

  isLeftSliderButtonDisabled: true,
  isRightSliderButtonDisabled: false,
};

const slider = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SLIDER_LEFT:
      return extend(state, {
        currentSlide: action.payload.newSlide,
        isLeftSliderButtonDisabled: action.payload.isLeftSliderButtonDisabled,
        isRightSliderButtonDisabled: false
      });

    case ActionType.SLIDER_RIGHT:
      return extend(state, {
        currentSlide: action.payload.newSlide,
        isLeftSliderButtonDisabled: false,
        isRightSliderButtonDisabled: action.payload.isRightSliderButtonDisabled
      });
  }

  return state;
};

export {slider};

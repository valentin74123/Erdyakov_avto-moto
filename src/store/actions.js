export const ActionType = {
  CHANGE_TAB: `CHANGE_TAB`,
  SLIDER_LEFT: `SLIDER_LEFT`,
  SLIDER_RIGHT: `SLIDER_RIGHT`,
  ADD_REVIEW: `ADD_REVIEW`
};

export const changeInfoTab = (tab) => ({
  type: ActionType.CHANGE_TAB,
  payload: tab
});

export const promoSlideLeft = (newSlide, isLeftSliderButtonDisabled) => ({
  type: ActionType.SLIDER_LEFT,
  payload: {
    newSlide,
    isLeftSliderButtonDisabled
  }
});

export const promoSlideRight = (newSlide, isRightSliderButtonDisabled) => ({
  type: ActionType.SLIDER_RIGHT,
  payload: {
    newSlide,
    isRightSliderButtonDisabled
  }
});

export const addReview = (review) => ({
  type: ActionType.ADD_REVIEW,
  payload: (review),
});

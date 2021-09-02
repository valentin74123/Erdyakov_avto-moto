import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {reviewsMocks} from "../../../mocks/mocks";

const initialState = {
  reviews: reviewsMocks,
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: [action.payload, ...state.reviews],
      });
  }

  return state;
};

export {reviews};

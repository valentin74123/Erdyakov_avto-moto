import {combineReducers} from "redux";
import {slider} from "./slider/slider";
import {tabs} from "./tabs/tabs";
import {reviews} from "./reviews/reviews";

export const NameSpace = {
  SLIDER: `SLIDER`,
  TABS: `TABS`,
  REVIEWS: `REVIEWS`,
};

export default combineReducers({
  [NameSpace.SLIDER]: slider,
  [NameSpace.TABS]: tabs,
  [NameSpace.REVIEWS]: reviews,
});

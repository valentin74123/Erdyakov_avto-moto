import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {TabName} from '../../../const';

const initialState = {
  activeInfoTab: TabName.SPECIFICATIONS,
};

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TAB:
      return extend(state, {
        activeInfoTab: action.payload
      });
  }

  return state;
};

export {tabs};

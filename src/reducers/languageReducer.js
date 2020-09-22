// Not using language feature as actions anywhere (yet to implement)

import { CHANGE_LANGUAGE } from "../actions/types";

const initialState = {
  language: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
}

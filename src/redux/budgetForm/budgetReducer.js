import * as budgetTypes from './budgetTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case budgetTypes.SAVE_BUDGET:
      return (state = payload.budget);

    default:
      return state;
  }
};

export default budgetReducer;

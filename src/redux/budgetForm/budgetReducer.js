import { toast } from 'react-toastify';

import * as budgetTypes from './budgetTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case budgetTypes.SAVE_BUDGET:
      if (payload.budget <= 0 || state === null) {
        toast.warn('Введите целое число!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return state;
      } else {
        return (state = parseInt(payload.budget));
      }

    default:
      return state;
  }
};

export default budgetReducer;

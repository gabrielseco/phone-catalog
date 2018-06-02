import { combineReducers } from 'redux';

import phones, { type PhonesState } from './phones';

export type RootState = {
  phones: PhonesState
};

const rootReducer = combineReducers({
  phones: phones
});

export default rootReducer;

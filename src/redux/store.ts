import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const composeEnhancer = composeWithDevTools({ trace: true });
export const store = createStore(reducer, composeEnhancer());
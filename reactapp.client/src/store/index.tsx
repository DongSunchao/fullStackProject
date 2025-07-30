import { configureStore } from '@reduxjs/toolkit'; 

import auth from './auth/reducer';
import logger from 'redux-logger';

//const middleware = [thunk, logger];
const store = configureStore({
    reducer: { auth },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;


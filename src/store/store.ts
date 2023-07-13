import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from './reducers/counter-exemplo/counterSlice';
import logger from 'redux-logger';
import usuarioSlice from './reducers/usuario/usuarioSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usuario: usuarioSlice
  },
  middleware: [...getDefaultMiddleware(), logger]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

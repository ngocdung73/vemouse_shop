import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {
  commonReducer,
  productReducer,
  authReducer,
  taskReducer,
  categoryReducer,
} from './redux/reducers'
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    commonReducer,
    productReducer,
    authReducer,
    taskReducer,
    categoryReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

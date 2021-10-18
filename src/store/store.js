import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../middleware/rootSaga';
import reducer from '../reducer/rootreducer';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);
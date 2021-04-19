import { createStore,applyMiddleware  } from 'redux'
import RootReducer from './reducers/root.reducer'
import createSagaMidddleware from 'redux-saga';
import rootSaga from './sagas/root.saga'

export default function () {
    const sagaMiddleware = createSagaMidddleware();
    const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
} 

import { all } from 'redux-saga/effects';
import navSaga from './nav.saga';

export default function* rootSaga () {
  yield all([
    navSaga()
  ])
}
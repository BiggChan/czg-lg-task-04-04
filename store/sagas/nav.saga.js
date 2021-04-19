import { takeEvery, put, delay } from 'redux-saga/effects';

function* load_posts (action) {
  // 去执行同步action
  console.log(1111);
}

export default function* postSaga () {
  yield takeEvery('add_async', load_posts)
}
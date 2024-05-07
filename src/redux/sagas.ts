import { all, fork } from "redux-saga/effects";

import covidSagas from "./covid/saga";

export default function* rootSaga() {
  yield all([fork(covidSagas)]);
}

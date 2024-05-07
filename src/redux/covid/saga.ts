import {
  call,
  put,
  all,
  fork,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";

// services
import * as services from "../../services/covidServices";

// ** routes

import { toast } from "react-toastify";

import { AxiosResponse } from "axios";
import { covidActions } from "./slice";

function* getCountryCovidInfo({
  payload,
}: ReturnType<typeof covidActions.getCountryCovidInfo>) {
  try {
    const response: AxiosResponse = yield call(
      services.getCountryCovidInfoAsync,
      payload
    );
    const { data } = response;

    if (response.status === 200) {
      yield put(covidActions.getCountryCovidInfoSuccess(data.result[0]));
    } else {
      console.log(data);

      toast.error(data.message);
      yield put(covidActions.getCountryCovidInfoFailure());
    }
  } catch (error: any) {
    const { data } = error.response;

    toast.error(data.message);
    yield put(covidActions.getCountryCovidInfoFailure());
  }
}

export function* watchGetCountryCovidInfo(): Generator<StrictEffect> {
  yield takeLatest("covid/getCountryCovidInfo", getCountryCovidInfo);
}
//Fork
export default function* rootSaga() {
  yield all([fork(watchGetCountryCovidInfo)]);
}

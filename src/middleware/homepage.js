import { takeEvery, put } from "@redux-saga/core/effects";
import { set_highlight, set_newarrival, set_category } from "../reducer/homepage";
import Homepage from "../api/Homepage";

// Highlight
export function* watcherHomepage() {
    yield takeEvery('homepage/get_highlight', getHighlight);
    yield takeEvery('homepage/get_newarrival', getNewarrival);
    yield takeEvery('homepage/get_category', getCategory);
}
function* getHighlight(action) {
    try {
        const params = action.payload.params;
        const data = yield Homepage.getHighlight(params);
        yield put(set_highlight(data));
    } catch (err) {
        console.log(err);
    }
}

// NewArrival
function* getNewarrival(action) {
    try {
        const params = action.payload.params;
        const data = yield Homepage.getNewarrival(params);
        yield put(set_newarrival(data));
    } catch (err) {
        console.log(err);
    }
}

//Category
function* getCategory() {
    try {
        const data = yield Homepage.getAll();
        yield put(set_category(data));
    } catch (err) {
        console.log(err);
    }
}
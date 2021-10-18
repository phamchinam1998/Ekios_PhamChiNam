import { all } from 'redux-saga/effects';
import { watcherHomepage } from '../middleware/homepage';

function* logAction(action) {
    yield console.log("ACTION : " + action);
}

export default function* rootSaga() {
    yield all([
        watcherHomepage(),
        logAction()
    ])
}
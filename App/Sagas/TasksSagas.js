import { call, put } from 'redux-saga/effects'
import TasksActions from '../Redux/TasksRedux'

export function * getTasks (apiOdoo, action) {
    const { sessionId } = action
    // make the call to the api
    const response = yield call(apiOdoo.getTasks, sessionId)

    // success?
    if (response.ok) {
        if (response.data.error) {
            yield put(TasksActions.tasksFailure('Wrong'))
        } else {
            yield put(TasksActions.tasksSuccess(response.data.result))
        }
    } else {
        yield put(TasksActions.tasksFailure('Wrong'))
    }
}

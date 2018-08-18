import { getTaskList, createTaskList, deleteTaskList, updateTaskList } from '../api';

const getTaskRequest = () => ({ type: 'GET_TASK_REQUEST' });
const getTaskSuccess = (payload) => ({ type: 'GET_TASK_SUCCESS', payload });
const getTaskFailure = (payload) => ({ type: 'GET_TASK_FAILURE', payload });


export function getTask() {
    return async (dispatch) => {
        dispatch(getTaskRequest());
        try {
            const data = await getTaskList();
            dispatch(getTaskSuccess(data));
        } catch (error) {
            dispatch(getTaskFailure(error));
        }
    }
}

const createTaskRequest = () => ({ type: 'CREATE_TASK_REQUEST' });
const createTaskSuccess = (payload) => ({ type: 'CREATE_TASK_SUCCESS', payload });
const createTaskFailure = (payload) => ({ type: 'CREATE_TASK_FAILURE', payload });


export function createTask(value) {
    return async (dispatch) => {
        dispatch(createTaskRequest());
        try {
            const data = await createTaskList(value);
            dispatch(createTaskSuccess(data));
        } catch (error) {
            dispatch(createTaskFailure(error));
        }
    }
}

const deleteTaskRequest = () => ({ type: 'DELETE_TASK_REQUEST' });
const deleteTaskSuccess = (payload) => ({ type: 'DELETE_TASK_SUCCESS', payload });
const deleteTaskFailure = (payload) => ({ type: 'DELETE_TASK_FAILURE', payload });


export function deleteTask(task_id) {
    return async (dispatch) => {
        dispatch(deleteTaskRequest());
        try {
            const data = await deleteTaskList(task_id);
            dispatch(deleteTaskSuccess(data));
        } catch (error) {
            dispatch(deleteTaskFailure(error));
        }
    }
}

const updateTaskRequest = () => ({ type: 'UPDATE_TASK_REQUEST' });
const updateTaskSuccess = (payload) => ({ type: 'UPDATE_TASK_SUCCESS', payload });
const updateTaskFailure = (payload) => ({ type: 'UPDATE_TASK_FAILURE', payload });


export function updateTask(task_id) {
    return async (dispatch) => {
        dispatch(updateTaskRequest());
        try {
            const data = await updateTaskList(task_id);
            dispatch(updateTaskSuccess(data));
        } catch (error) {
            dispatch(updateTaskFailure(error));
        }
    }
}

const filterTaskRequest = () => ({ type: 'FILTER_TASK_REQUEST' });
const filterTaskSuccess = (payload) => ({ type: 'FILTER_TASK_SUCCESS', payload });
const filterTaskFailure = (payload) => ({ type: 'FILTER_TASK_FAILURE', payload });


export function searchTask(searchValue, showUncompletedOnly) {
    return (dispatch) => {
        dispatch(filterTaskRequest());
        try {
            const dataFilter = {
                searchValue: searchValue,
                showUncompletedOnly: showUncompletedOnly,
            };
            dispatch(filterTaskSuccess(dataFilter));
        } catch (error) {
            dispatch(filterTaskFailure(error));
        }
    }
}


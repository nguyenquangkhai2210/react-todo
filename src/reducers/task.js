const INITIAL_STATE = {
    taskList: [],
    searchValue: '',
    showUncompletedOnly: false,
    fetching: false,
    error: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TASK_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case 'GET_TASK_SUCCESS':
            return {
                ...state,
                taskList: action.payload,
                fetching: false,
            }
        case 'GET_TASK_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }

        case 'CREATE_TASK_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case 'CREATE_TASK_SUCCESS':
            return {
                ...state,
                taskList: [...state.taskList, action.payload],
                fetching: false,
            }
        case 'CREATE_TASK_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }

        case 'DELETE_TASK_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case 'DELETE_TASK_SUCCESS':
            return {
                ...state,
                taskList: state.taskList.filter(task => task._id !== action.payload._id),
                fetching: false,
            }
        case 'DELETE_TASK_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }

        case 'UPDATE_TASK_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case 'UPDATE_TASK_SUCCESS':
            return {
                ...state,
                taskList: state.taskList.map(task => task._id === action.payload._id ? action.payload : task),
                fetching: false,
            }
        case 'UPDATE_TASK_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }

        case 'FILTER_TASK_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case 'FILTER_TASK_SUCCESS':
            return {
                ...state,
                searchValue: action.payload.searchValue,
                showUncompletedOnly: action.payload.showUncompletedOnly,
                fetching: false,
            }
        case 'FILTER_TASK_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }

        default:
            return state;
    }
}
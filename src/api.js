import axios from 'axios';

const API_URL = 'https://innoteq-todo.herokuapp.com/';

export const getTaskList = async () => {
    const result = await axios.get(API_URL);
    return result.data.tasks;
}

export const createTaskList = async (value) => {
    const result = await axios.post(API_URL, {value});
    return result.data;
}

export const deleteTaskList = async (task_id) => {
    const result = await axios.delete(API_URL + task_id);
    return result.data;
}

export const updateTaskList = async (task) => {
    const result = await axios.patch(API_URL + task._id, {isCompleted: !task.isCompleted});
    return result.data;
}

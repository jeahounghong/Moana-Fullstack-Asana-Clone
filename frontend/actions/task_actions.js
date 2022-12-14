import * as TaskApiUtil from "../util/task_api_util";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
import { showUpdateTaskForm } from "./ui_actions";

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})

const receiveTasks = (tasks) => ({
    type: RECEIVE_TASKS,
    tasks
})

const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    taskId
})

export const fetchProjectTasks = (projectId) => dispatch => TaskApiUtil.fetchProjectTasks(projectId)
    .then(tasks => dispatch(receiveTasks(tasks)));

export const fetchSectionTasks = (sectionId) => dispatch => TaskApiUtil.fetchSectionTasks(sectionId)
    .then(tasks => dispatch(receiveTasks(tasks)));

export const fetchSubtasks = (taskId) => dispatch => TaskApiUtil.fetchSubtasks(taskId)
    .then(tasks => dispatch(receiveTasks(tasks)));

export const fetchTask = (taskId) => dispatch => TaskApiUtil.fetchTask(taskId)
    .then(task => dispatch(receiveTask(task)))

export const createTask = (task) => dispatch => TaskApiUtil.createTask(task)
    .then(task => {dispatch(receiveTask(task)); dispatch(showUpdateTaskForm(task))} );

export const updateTask = (task) => dispatch => TaskApiUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)));

export const deleteTask = (taskId) => dispatch => TaskApiUtil.deleteTask(taskId)
    .then(() => dispatch(removeTask(taskId)));
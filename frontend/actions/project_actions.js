import * as ProjectApiUtil from  "../util/project_api_util";
import { closeModal } from "./ui_actions";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

const receiveProjects = (projects) => ({
    type: RECEIVE_PROJECTS,
    projects
})

const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
})

const removeProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId
})

export const fetchTeamProjects = (teamId) => dispatch => ProjectApiUtil.fetchTeamProjects(teamId)
    .then(projects => dispatch(receiveProjects(projects)))

export const fetchUserProjects = (userId) => dispatch => ProjectApiUtil.fetchUserProjects(userId)
    .then(projects => dispatch(receiveProjects(projects)))

export const createProject = (project) => dispatch => ProjectApiUtil.createProject(project)
    .then(project => {
        dispatch(receiveProject(project));
        dispatch(closeModal())
    })

export const updateProject = (project) => dispatch => ProjectApiUtil.updateProject(project)
    .then(project => {
        dispatch(receiveProject(project));
        dispatch(closeModal());
    })

export const deleteProject = (projectId) => dispatch => ProjectApiUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)))

export const addProjectUser = (userData) => dispatch => ProjectApiUtil.addProjectUser(userData)
    .then(project => {dispatch(receiveProject(project)); dispatch(closeModal())})
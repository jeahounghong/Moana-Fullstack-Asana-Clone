export const CLOSE_MODAL = "CLOSE_MODAL";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const SHOW_NEW_TEAM_FORM = "SHOW_NEW_TEAM_FORM";
export const SHOW_NEW_PROJECT_FORM = "SHOW_NEW_PROJECT_FORM";
export const SHOW_UPDATE_TEAM_FORM = "SHOW_UPDATE_TEAM_FORM";
export const SHOW_UPDATE_PROJECT_FORM = "SHOW_UPDATE_PROJECT_FORM";
export const SHOW_NEW_TASK_FORM = "SHOW_NEW_TASK_FORM";
export const CLOSE_TASK_SHOW = "CLOSE_TASK_SHOW";

export const showNewTeamForm = () => ({
    type: SHOW_NEW_TEAM_FORM
})

export const showNewProjectForm = () => ({
    type: SHOW_NEW_PROJECT_FORM
})

export const showNewTaskForm = () => ({
    type: SHOW_NEW_TASK_FORM
})

export const showUpdateTeamForm = (teamId) => ({
    type: SHOW_UPDATE_TEAM_FORM,
    teamId
})

export const showUpdateProjectForm = (projectId) => ({
    type: SHOW_UPDATE_PROJECT_FORM,
    projectId
})


export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR
})

export const closeTaskShow = () => ({
    type: CLOSE_TASK_SHOW
})

export const openSidebar = () => ({
    type: OPEN_SIDEBAR
})


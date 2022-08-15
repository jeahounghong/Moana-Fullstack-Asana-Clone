export const SHOW_NEW_TEAM_FORM = "SHOW_NEW_TEAM_FORM";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const SHOW_NEW_PROJECT_FORM = "SHOW_NEW_PROJECT_FORM";

export const showNewTeamForm = () => ({
    type: SHOW_NEW_TEAM_FORM
})

export const showNewProjectForm = () => ({
    type: SHOW_NEW_PROJECT_FORM
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR
})

export const openSidebar = () => ({
    type: OPEN_SIDEBAR
})


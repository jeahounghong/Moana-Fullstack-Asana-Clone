
export const fetchTeamProjects = (teamId) => (
    $.ajax({
        url: `/api/teams/${teamId}/projects`,
        method: `GET`
    })
)

export const fetchUserProjects = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/projects`,
        method: `GET`
    })
)

export const createProject = (project) => (
    $.ajax({
        url: `/api/projects`,
        method: `POST`,
        data: {project: project}
    })
)

export const updateProject = (project) => (
    $.ajax({
        url: `/api/projects/${project.id}`,
        method: `PATCH`,
        data: {project: project}
    })
)

export const deleteProject = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}`,
        method: `DELETE`
    })
)
export const fetchProjectTasks = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/tasks`,
        method: `GET`
    })
)

export const fetchSectionTasks = (sectionId) => (
    $.ajax({
        url: `/api/sections/${sectionId}/tasks`,
        method: `GET`
    })
)

export const fetchSubtasks = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}/tasks`,
        method: `GET`
    })
)

export const fetchTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: `GET`
    })
)

export const createTask = (task) => (
    $.ajax({
        url: `/api/tasks`,
        method: `POST`,
        data: {task: task}
    })
)

export const updateTask = (task) => (
    $.ajax({
        url: `/api/tasks/${task.id}`,
        method: `PATCH`,
        data: {task: task}
    })
)

export const deleteTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: `DELETE`
    })
)
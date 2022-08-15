
export const fetchProjectSections = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/sections`,
        method: `GET`
    })
)
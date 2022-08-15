
export const fetchProjectSections = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/sections`,
        method: `GET`
    })
)

export const updateSection = (section) => (
    $.ajax({
        url: `/api/sections/${section.id}`,
        method: `PATCH`,
        data: {section: section}
    })
)

export const createSection = (section) => (
    $.ajax({
        url: `/api/sections`,
        method: "POST",
        data: {section: section}
    })
)

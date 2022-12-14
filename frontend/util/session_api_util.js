
export const signup = user => (
    $.ajax({
        url:'/api/users',
        method: 'POST',
        data: {user},
    })
)

export const login = user => {
    console.log(user);
    return $.ajax({
        url:'/api/session',
        method: 'POST',
        data: {user},
    })
}

export const logout = () => (
    $.ajax({
        url:'/api/session',
        method: 'DELETE'
    })
)

export const fetchUser = (userId) => (
    $.ajax({
        url: `api/users/${userId}`,
        method: `GET`
    })
)

export const fetchProjectUsers = (projectId) => (
    $.ajax({
        url: `/api/projects/${projectId}/users`,
        method: `GET`
    })
)
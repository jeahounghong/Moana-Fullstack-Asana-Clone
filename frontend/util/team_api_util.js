
export const createTeam = (team) => (
    $.ajax({
        url: '/api/teams',
        method: 'POST',
        data: {team: team}
    })
)

export const fetchUserTeams = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/teams`,
        method: 'GET'
    })
)

export const deleteTeam = (teamId) => (
    $.ajax({
        url: `/api/teams/${teamId}`,
        method: `DELETE`
    })
)

export const updateTeam = (team) => (
    $.ajax({
        url: `/api/teams/${team.id}`,
        method: `PATCH`,
        data: {team: team}
    })
)

export const addTeamUser = (userData) => (
    $.ajax({
        url: `/api/team_users`,
        method: `POST`,
        data: {userData: userData}
    })
)
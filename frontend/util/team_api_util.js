
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
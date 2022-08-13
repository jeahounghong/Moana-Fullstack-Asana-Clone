
export const createTeam = (team) => (
    $.ajax({
        url: '/api/teams',
        method: 'POST',
        data: {team: team}
    })
)

export const receiveUserTeams = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/teams`,
        method: 'GET'
    })
)
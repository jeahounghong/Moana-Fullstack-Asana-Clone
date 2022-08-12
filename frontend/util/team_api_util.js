
export const createTeam = (team) => (
    $.ajax({
        url: '/api/teams',
        method: 'POST',
        data: {team: team}
    })
)
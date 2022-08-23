json.extract! team, :id, :name, :description
json.team_projects team.projects.ids
json.team_users team.users.ids
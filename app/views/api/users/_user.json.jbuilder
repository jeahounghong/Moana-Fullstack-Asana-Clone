json.extract! user, :username, :id, :email, :first_name, :last_name
json.user_teams_ids user.teams.ids
json.user_tasks user.tasks.ids


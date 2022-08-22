json.extract! project, :id, :team_id, :title, :description, :public
json.project_sections project.sections.ids
json.project_tasks project.tasks.ids
json.project_users project.users.ids
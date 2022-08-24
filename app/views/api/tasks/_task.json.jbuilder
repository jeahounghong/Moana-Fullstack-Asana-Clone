json.extract! task, :id, :owner_id, :owner_type, :title, :description, :complete, :due_date, :user_id
json.subtasks task.tasks.ids
json.project_id task.project.id
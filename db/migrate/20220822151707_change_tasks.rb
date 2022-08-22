class ChangeTasks < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :title, :string, null: true
  end
end

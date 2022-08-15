class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :team_id, null: false
      t.string :title, null: false
      t.text :description
      t.boolean :public, default: true
      t.timestamps
    end

    add_index :projects, :team_id
  end
end

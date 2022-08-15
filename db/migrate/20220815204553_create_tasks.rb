class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :owner_id, null: false
      t.string :owner_type, null: false
      t.string :title, null: false
      t.text :description
      t.datetime :due_date
      t.boolean :complete
      t.timestamps
    end

    add_index :tasks, :owner_id
  end
end

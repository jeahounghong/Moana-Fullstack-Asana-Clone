class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :sections, :project_id
  end
end

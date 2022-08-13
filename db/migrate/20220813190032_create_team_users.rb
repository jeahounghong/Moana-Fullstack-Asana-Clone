class CreateTeamUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :team_users do |t|
      t.integer :team_id, null: false
      t.integer :user_id, null: false
      t.boolean :owner, null: false, default: false
      t.timestamps
    end

    add_index :team_users, :team_id
    add_index :team_users, :user_id
  end
end

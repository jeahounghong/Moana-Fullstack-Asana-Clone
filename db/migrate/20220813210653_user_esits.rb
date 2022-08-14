class UserEsits < ActiveRecord::Migration[5.2]
  def change
    add_index :users, [:username, :email], unique: true
  end
end

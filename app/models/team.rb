# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Team < ApplicationRecord
    validates :name, presence: :true

    has_many :team_users,
        class_name: :TeamUser,
        primary_key: :id,
        foreign_key: :team_id,
        dependent: :destroy
    
    has_many :users,
        through: :team_users
end

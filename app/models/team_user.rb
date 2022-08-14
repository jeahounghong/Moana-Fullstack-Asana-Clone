# == Schema Information
#
# Table name: team_users
#
#  id         :bigint           not null, primary key
#  team_id    :integer          not null
#  user_id    :integer          not null
#  owner      :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TeamUser < ApplicationRecord

    validates :team_id, :user_id, presence: true
    validates :team_id, uniqueness: {scope: :user_id, message: "A user cannot enter a team twice."}

    belongs_to :user
    belongs_to :team
end

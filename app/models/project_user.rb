# == Schema Information
#
# Table name: project_users
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProjectUser < ApplicationRecord

    validates :user_id, presence: true
    validates :project_id, presence: true
    validates :project_id, uniqueness: {scope: :user_id, message: "A user cannot be in the same project twice."}

    belongs_to :project
    belongs_to :user
end

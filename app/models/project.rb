# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  team_id     :integer          not null
#  title       :string           not null
#  description :text
#  public      :boolean          default(TRUE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Project < ApplicationRecord

    validates :team_id, :title, presence: true
    validates :title, uniqueness: {scope: :team_id}
    belongs_to :team

    has_many :sections
end

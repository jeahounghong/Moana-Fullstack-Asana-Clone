# == Schema Information
#
# Table name: sections
#
#  id         :bigint           not null, primary key
#  project_id :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Section < ApplicationRecord

    validates :project_id, presence: true
    validates :title, presence: true
    validates :title, uniqueness: {scope: :project_id}

    belongs_to :project
end

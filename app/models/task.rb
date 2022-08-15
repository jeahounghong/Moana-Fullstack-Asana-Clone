# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  owner_type  :string           not null
#  title       :string           not null
#  description :text
#  due_date    :datetime
#  complete    :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Task < ApplicationRecord

    validates :owner_id, :owner_type, :title, presence: true

    belongs_to :owner, polymorphic: true

    has_many :tasks, as: :owner
end

# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  owner_type  :string           not null
#  title       :string
#  description :text
#  due_date    :datetime
#  complete    :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#
class Task < ApplicationRecord

    validates :owner_id, :owner_type, presence: true

    belongs_to :owner, polymorphic: true
    belongs_to :user, optional: true

    has_many :tasks, as: :owner

    def project
        if self.owner_type == "Project"
            return self.owner
        elsif self.owner_type == "Section"
            return self.owner.project
        else
            return self.owner.project
        end
    end

end

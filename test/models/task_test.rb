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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

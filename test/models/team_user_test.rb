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
require 'test_helper'

class TeamUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

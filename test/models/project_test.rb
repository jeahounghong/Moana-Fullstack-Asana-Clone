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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

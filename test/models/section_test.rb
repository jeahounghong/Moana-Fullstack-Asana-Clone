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
require 'test_helper'

class SectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

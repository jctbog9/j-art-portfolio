require 'rails_helper'

RSpec.describe Image, type: :model do
  it { should have_valid(:name).when("Event Name") }
  it { should_not have_valid(:name).when(nil, "") }
end

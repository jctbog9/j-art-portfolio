require 'rails_helper'

RSpec.describe Exhibition, type: :model do
  it { should have_valid(:name).when("Event Name") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:location).when("Event Name") }
  it { should_not have_valid(:location).when(nil, "") }

  it { should have_valid(:date).when("Event Name") }
  it { should_not have_valid(:date).when(nil, "") }
end

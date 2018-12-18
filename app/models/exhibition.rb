class Exhibition < ApplicationRecord
  validates :name, presence: true
  validates :date, presence: true
  validates :location, presence: true

  has_many :images
end

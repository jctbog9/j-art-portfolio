class Image < ApplicationRecord
  validates :name, presence: true

  belongs_to :exhibition
end

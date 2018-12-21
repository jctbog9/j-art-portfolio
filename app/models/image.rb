class Image < ApplicationRecord
  validates :name, presence: true

  mount_uploader :image, ImageUploader

  belongs_to :exhibition
end

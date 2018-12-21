class ExhibitionSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :images
end

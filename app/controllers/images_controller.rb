class ImagesController < ApplicationController
  def index
  end

  def new
    @image = Image.new
    @exhibitions = Exhibition.all
    @selectors = []
    @exhibitions.each do |exhibition|
      @selectors << [exhibition.name, exhibition.id]
    end
  end

  def create
    Image.create!(params[:image].permit(:name, :price, :description, :exhibition_id, :image))
    redirect_to root_path
  end
end

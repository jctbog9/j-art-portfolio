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
    Image.create!(image_params)
    redirect_to root_path
  end

  private

  def image_params
    params[:image].permit(:name, :price, :description, :image, :exhibition_id)
  end
end

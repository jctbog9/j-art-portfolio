class ExhibitionsController < ApplicationController
  def index
  end

  def new
    @exhibition = Exhibition.new

  end

  def create
    Exhibition.create!(exhibition_params)
    redirect_to root_path
  end

  private

  def exhibition_params
    params[:exhibition].permit(:name, :location, :date)
  end
end

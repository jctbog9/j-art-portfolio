class Api::V1::ExhibitionsController < ApplicationController
  def index
    render json: Exhibition.all
  end
  def show
    render json: Exhibition.find(params[:id])
  end
end

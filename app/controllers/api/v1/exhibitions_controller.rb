class Api::V1::ExhibitionsController < ApplicationController
  def index
    render json: Exhibition.all
  end
end

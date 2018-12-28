Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :images, only: [:new, :create]
  resources :exhibitions, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :exhibitions, only: [:index, :show]
    end
  end

  get "/exhibitions/:id", to: "homes#index"
end

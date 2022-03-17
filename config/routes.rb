Rails.application.routes.draw do
  root to: 'static_pages#index'
  get '/' => 'static_pages#index'


  namespace :api do

    #sessions
    get '/authenticated' => 'sessions#authenticated'


    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]


  end

end

Rails.application.routes.draw do
  root to: 'static_pages#index'

  namespace :api do

    #sessions
    get '/authenticated' => 'sessions#authenticated'

    #phones
    get '/phones/stock' => 'phones#stock'

    resources :phones, only: [:index]
    resources :specs, only: [:index]
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]


  end

  get '*path' => 'static_pages#index'

end

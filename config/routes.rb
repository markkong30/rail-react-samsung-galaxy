Rails.application.routes.draw do
  root to: 'static_pages#index'

  namespace :api do

    #sessions
    get '/authenticated' => 'sessions#authenticated'
    delete '/logout' => 'sessions#destroy'

    #phones
    get '/phones/stock' => 'phones#stock'

    resources :phones, only: [:index]
    resources :specs, only: [:index]
    resources :users, only: [:create]
    resources :sessions, only: [:create]
    resources :orders, only: [:create]
    resources :charges, only: [:create]



  end

  get '*path' => 'static_pages#index'

end

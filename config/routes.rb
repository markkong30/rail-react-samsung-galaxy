Rails.application.routes.draw do
  root to: 'static_pages#index'
  get '/' => 'static_pages#index'


  namespace :api do
    # Add routes below this line


  end

end

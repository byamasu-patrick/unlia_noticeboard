Rails.application.routes.draw do
  

  namespace :api do
    namespace :v1 do
      # Sessions
      resources :sessions, only: [:create]
      # resources :leaders
      get 'leaders/index'
      get 'leaders/show'
      get 'leaders/update'
      get 'leaders/destroy'
      # resources :dishes
      get 'dishes/index'
      # resources :comments      
      get 'comments/index'
      post 'comments/create'

      delete :logout, to: 'sessions#logout'
      get :login, to: 'sessions#logged_in'

      post 'registration/create', to: 'registration#create'
      
    end
  end
  root 'pages#index'

  match '/*path', to: 'pages#index', via: :all

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

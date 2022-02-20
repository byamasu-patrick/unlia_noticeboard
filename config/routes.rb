Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
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
    end
  end
  root 'pages#index'

  get '/*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

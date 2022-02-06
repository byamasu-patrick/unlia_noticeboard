Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'leaders/index'
      get 'leaders/show'
      get 'leaders/update'
      get 'leaders/destroy'
    end
  end
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      # resources :dishes
      get 'dishes/index'
      # resources :comments
    end
  end

  get '/*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

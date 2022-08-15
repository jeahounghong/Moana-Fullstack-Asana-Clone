Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do 
    resources :users do 
      resources :teams, only: [:index]
      resources :projects, only: [:index]
    end

    resources :teams, only: [:create, :update, :delete] do
      resources :projects, only: [:index]
    end

    resources :projects, only: [:create, :update, :delete] do 
      resources :sections, only: [:index]
    end

    resources :sections, only: [:create, :update, :delete]

    resource :session, only: [:create, :destroy]
  end
end

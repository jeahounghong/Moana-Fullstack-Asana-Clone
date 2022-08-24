Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do 
    resources :users do 
      resources :teams, only: [:index]
      resources :projects, only: [:index]
    end

    resources :teams, only: [:create, :update, :destroy, :show] do
      resources :projects, only: [:index]
    end

    resources :projects, only: [:create, :update, :destroy] do 
      resources :sections, only: [:index]
      resources :tasks, only: [:index]
      resources :users, only: [:index]
    end

    resources :sections, only: [:create, :update, :destroy] do 
      resources :tasks, only: [:index]
    end

    resources :tasks, only: [:create, :update, :destroy, :show] do 
      resources :tasks, only: [:index]
    end

    resources :team_users, only: [:create, :destroy]

    resources :project_users, only: [:create, :destroy]

    resource :session, only: [:create, :destroy]
  end
end

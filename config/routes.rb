Rails.application.routes.draw do
  devise_for :users
  root to: 'stocks#index'
  resources :users, only: [:index, :edit, :update]

  get 'stocks', to: 'stocks#edit'
  resources :stocks

end
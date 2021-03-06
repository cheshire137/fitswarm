Rails.application.routes.draw do
  devise_for :users,
    controllers: { omniauth_callbacks: 'users/omniauth_callbacks' },
    sessions: 'users/sessions'

  scope defaults: { format: :json }, path: '/api' do
    get '/user' => 'users#current', as: :current_user

    get '/foursquare/annual-activity' => 'foursquare#annual_activity',
      as: :foursquare_annual_activity
  end

  root to: 'home#index'

  # Catch-all route so React can handle routing
  get '*path' => 'home#index'
end

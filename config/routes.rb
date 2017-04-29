Rails.application.routes.draw do
  devise_for :users,
    controllers: { omniauth_callbacks: 'users/omniauth_callbacks' },
    sessions: 'users/sessions'

  scope defaults: { format: :json }, path: '/api' do
    get '/user' => 'users#current', as: :current_user

    get '/fitbit/activities' => 'fitbit#activities', as: :fitbit_activities
    get '/foursquare/checkins/gym' => 'foursquare#gym_checkins',
      as: :foursquare_gym_checkins
  end

  root to: 'home#index'

  # Catch-all route so React can handle routing
  get '*path' => 'home#index'
end

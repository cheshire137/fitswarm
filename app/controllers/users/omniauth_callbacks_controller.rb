class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  before_action :authenticate_user!, only: [:fitbit]

  def foursquare
    auth = request.env['omniauth.auth']
    user = User.where(email: auth.info.email).first_or_initialize
    user.foursquare_access_token = auth.credentials.token
    user.foursquare_uid = auth.uid

    if user.new_record?
      user.password = Devise.friendly_token[0, 20]
    end

    if user.save
      sign_in_and_redirect(user, event: :authentication)
    else
      flash[:error] = "Failed to sign up: #{user.errors.full_messages.join(', ')}"
      redirect_to root_path
    end
  end

  def fitbit
    auth = request.env['omniauth.auth']

    current_user.fitbit_uid = auth.uid
    current_user.fitbit_access_token = auth.credentials.token
    current_user.fitbit_refresh_token = auth.credentials.refresh_token

    unless current_user.save
      flash[:error] = "Failed to sign in with Fitbit: #{user.errors.full_messages.join(', ')}"
    end

    redirect_to root_path
  end

  def failure
    redirect_to root_path
  end
end

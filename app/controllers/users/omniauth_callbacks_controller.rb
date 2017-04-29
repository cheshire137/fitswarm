class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def fitbit
    auth = request.env['omniauth.auth']
    user = User.where(provider: auth.provider, uid: auth.uid).first
    return sign_in_and_redirect(user, event: :authentication) if user

    raise auth.inspect
  end

  def foursquare
    auth = request.env['omniauth.auth']
    user = User.where(provider: auth.provider, uid: auth.uid).first_or_initialize

    if user.persisted?
      return sign_in_and_redirect(user, event: :authentication)
    end

    user.email = auth.info.email
    user.password = Devise.friendly_token[0, 20]

    if user.save
      sign_in_and_redirect(user, event: :authentication)
    else
      flash[:error] = "Failed to sign up: #{user.errors.full_messages.join(', ')}"
      redirect_to root_path
    end
  end

  def failure
    redirect_to root_path
  end
end

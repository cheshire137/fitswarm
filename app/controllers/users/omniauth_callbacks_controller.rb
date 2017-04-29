class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def failure
    redirect_to root_path
  end
end

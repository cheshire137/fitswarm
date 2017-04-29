class FitbitController < ApplicationController
  before_action :authenticate_user!
  before_action :ensure_fitbit_auth

  def activities
    api = FitbitApi.new(current_user.fitbit_access_token)
    json = api.activities(Time.zone.now)
    render json: json
  end

  private

  def ensure_fitbit_auth
    unless current_user.authenticated_with_fitbit?
      head :unauthorized
    end
  end
end

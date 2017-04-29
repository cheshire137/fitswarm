class FoursquareController < ApplicationController
  before_action :authenticate_user!

  def checkins
    api = FoursquareApi.new(current_user.foursquare_access_token)
    json = api.checkins(Time.zone.now)
    render json: json
  end

  def gym_checkins
    api = FoursquareApi.new(current_user.foursquare_access_token)
    json = api.gym_checkins(Time.zone.now)
    render json: json
  end
end

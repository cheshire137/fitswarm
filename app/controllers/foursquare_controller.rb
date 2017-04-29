class FoursquareController < ApplicationController
  before_action :authenticate_user!

  def gym_checkins
    foursquare_api = FoursquareApi.new(current_user.foursquare_access_token)
    checkins = foursquare_api.gym_checkins(Time.zone.now)

    if checkins
      fitbit_api = FitbitApi.new(current_user.fitbit_access_token)
      checkins = checkins[0...10] # no more than ten at a time

      checkins.each do |checkin|
        date = Time.at(checkin['createdAt'])
        checkin['activities'] = fitbit_api.activities(date)
      end
    end

    render json: checkins
  end
end

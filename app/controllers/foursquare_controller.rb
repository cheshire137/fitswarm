class FoursquareController < ApplicationController
  before_action :authenticate_user!

  def annual_activity
    result = {}
    checkin_start_time = 1.year.ago

    fitbit_api = FitbitApi.new(current_user.fitbit_access_token)
    steps = fitbit_api.yearly_steps

    if steps
      steps.each_with_index do |step, i|
        time = Time.zone.parse(step['dateTime'])
        checkin_start_time = time if i == 0
        date = time.beginning_of_day
        result[date] ||= {}
        result[date]['stepCount'] = step['value'].to_i
      end
    end

    foursquare_api = FoursquareApi.new(current_user.foursquare_access_token)
    checkins = foursquare_api.gym_checkins(checkin_start_time)

    if checkins
      checkins.each do |checkin|
        date = Time.zone.at(checkin['createdAt']).beginning_of_day
        result[date] ||= {}
        result[date]['checkin'] = checkin
      end
    end

    activity_list = result.sort_by { |date, activity| date }.reverse.
      map { |date, activity| activity.merge(date: date) }

    render json: activity_list
  end
end

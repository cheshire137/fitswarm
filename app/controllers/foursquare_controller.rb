class FoursquareController < ApplicationController
  before_action :authenticate_user!

  def annual_activity
    result = {}
    end_time = Time.zone.now
    start_time = end_time.beginning_of_month - 1.year
    start_date = start_time.to_date
    end_date = end_time.to_date

    start_date.upto(end_date) do |date|
      result[date] = {}
    end

    fitbit_api = FitbitApi.new(current_user.fitbit_access_token)
    steps = fitbit_api.steps(start_date: start_date, end_date: end_date)

    if steps
      steps.each do |step|
        date = Time.parse(step['dateTime']).to_date
        next unless result.key?(date)

        result[date]['stepCount'] = step['value'].to_i
      end
    end

    foursquare_api = FoursquareApi.new(current_user.foursquare_access_token)
    checkins = foursquare_api.gym_checkins(start_time)

    if checkins
      checkins.each do |checkin|
        date = Time.at(checkin['createdAt']).to_date
        next unless result.key?(date)

        result[date]['checkin'] = checkin
      end
    end

    activity_list = result.sort_by { |date, activity| date }.reverse.
      map do |date, activity|
        month = date.strftime("%b '%y")
        activity.merge(date: date, month: month)
      end

    render json: activity_list
  end
end

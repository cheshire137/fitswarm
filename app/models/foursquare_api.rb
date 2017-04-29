class FoursquareApi < Fetcher
  def initialize(token)
    super('https://api.foursquare.com/v2', token)
  end

  def gym_checkins(since_date)
    after = since_date.to_i
    json = get_response("/users/self/checkins?afterTimestamp=#{after}")
    return unless json && json['checkins']

    checkins = json['checkins']['items']
    return unless checkins

    checkins.select do |checkin|
      categories = checkin['venue']['categories'].map { |cat| cat['name'] }
      categories.include?('Gym')
    end
  end

  private

  def get_response(path)
    json = get(auth_path(path))

    return unless json && json['meta']

    unless json['meta']['code'] == 200
      raise "Bad Foursquare response: #{json}"
    end

    json['response']
  end

  def auth_path(path)
    connector = path.include?('?') ? '&' : '?'
    Rails.logger.info "#{base_url}#{path}#{connector}v=20170429"
    "#{path}#{connector}oauth_token=#{token}&v=20170429"
  end
end

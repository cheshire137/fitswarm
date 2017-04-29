class FoursquareApi < Fetcher
  def initialize(token)
    super('https://api.foursquare.com/v2', token)
  end

  def checkins(date)
    after = date.beginning_of_month.to_i
    json = get_response("/users/self/checkins?afterTimestamp=#{after}")

    return unless json

    json['checkins']
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

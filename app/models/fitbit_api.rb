class FitbitApi < Fetcher
  def initialize(token)
    super('https://api.fitbit.com/1', token)
  end

  # https://dev.fitbit.com/docs/activity/#activity-time-series
  def yearly_steps
    path = "/user/-/activities/steps/date/today/1y.json"
    Rails.logger.info "#{base_url}#{path}"
    json = get(path)

    return unless json

    json['activities-steps']
  end

  def activities(date)
    date_str = date.strftime('%Y-%m-%d')
    path = "/user/-/activities/date/#{date_str}.json"
    Rails.logger.info "#{base_url}#{path}"
    json = get(path)

    return unless json

    json
  end

  def refresh_tokens(refresh_token)
    Rails.logger.info "Refreshing Fitbit access token"
    grant = Base64.strict_encode64("#{ENV['FITBIT_APP_ID']}:#{ENV['FITBIT_APP_SECRET']}")

    uri = URI.parse('https://api.fitbit.com/oauth2/token')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    headers = { 'Authorization' => "Basic #{grant}" }
    req = Net::HTTP::Post.new(uri.request_uri, headers)
    data = { 'grant_type' => 'refresh_token',
             'refresh_token' => refresh_token }
    req.set_form_data(data)

    res = http.request(req)
    if res.kind_of? Net::HTTPSuccess
      json = JSON.parse(res.body)
      json.slice('access_token', 'refresh_token')
    end
  end

  private

  def get_headers
    { 'Authorization' => "Bearer #{token}" }
  end
end

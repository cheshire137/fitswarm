import Fetcher from './fetcher'

export default class OverwatchTeamCompsApi extends Fetcher {
  constructor() {
    super('/api')

    const tokenMeta = document.querySelector('meta[name="csrf-token"]')
    this.token = tokenMeta.content

    this.defaultHeaders = {
      'X-CSRF-TOKEN': this.token,
      'Content-type': 'application/json'
    }
  }

  getUser() {
    return this.get('/user', this.defaultHeaders).then(json => json.user)
  }

  getFitbitActivities() {
    return this.get('/fitbit/activities', this.defaultHeaders)
  }

  getFoursquareCheckins() {
    return this.get('/foursquare/checkins', this.defaultHeaders)
  }

  getFoursquareGymCheckins() {
    return this.get('/foursquare/checkins/gym', this.defaultHeaders)
  }
}

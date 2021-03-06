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

  getFoursquareAnnualActivity() {
    return this.get('/foursquare/annual-activity', this.defaultHeaders)
  }
}

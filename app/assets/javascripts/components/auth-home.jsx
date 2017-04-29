import PropTypes from 'prop-types'

import FitswarmApi from '../models/fitswarm-api'
import LocalStorage from '../models/local-storage'

import CheckinListItem from './checkin-list-item.jsx'

class AuthHome extends React.Component {
  static onCheckinsLoadError(error) {
    console.error('failed to load Swarm checkins', error)
  }

  constructor(props) {
    super(props)
    this.state = {
      isFitbitAuthenticated: LocalStorage.get('isFitbitAuthenticated'),
      checkins: []
    }
  }

  componentDidMount() {
    if (this.state.isFitbitAuthenticated) {
      const api = new FitswarmApi()
      api.getFoursquareGymCheckins().
          then(checkins => this.onCheckinsLoaded(checkins)).
          catch(err => AuthHome.onCheckinsLoadError(err))
    }
  }

  onCheckinsLoaded(checkins) {
    console.log(checkins)
    this.setState({ checkins })
  }

  fitbitLogin() {
    return (
      <section className="section">
        <div className="content container has-text-centered">
          <p>
            <a
              href="/users/auth/fitbit"
              className="button is-large"
            >Sign in with Fitbit</a>
          </p>
          <p className="subtitle">Correlate your Fitbit activity with Swarm gym visits.</p>
        </div>
      </section>
    )
  }

  render() {
    if (!this.state.isFitbitAuthenticated) {
      return this.fitbitLogin()
    }
    return (
      <section className="section">
        <div className="container content">
          <ul>
            {this.state.checkins.map(checkin => (
              <CheckinListItem
                key={checkin.id}
                {...checkin}
              />
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

AuthHome.propTypes = {
}

export default AuthHome

import PropTypes from 'prop-types'

import LocalStorage from '../models/local-storage'

class AuthHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFitbitAuthenticated: LocalStorage.get('isFitbitAuthenticated')
    }
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
    if (this.state.isFitbitAuthenticated) {
      return (
        <p>Hello!</p>
      )
    }
    return this.fitbitLogin()
  }
}

AuthHome.propTypes = {
}

export default AuthHome

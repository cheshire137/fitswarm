import PropTypes from 'prop-types'

import FitswarmApi from '../models/fitswarm-api'
import LocalStorage from '../models/local-storage'

import ActivityChart from './activity-chart.jsx'
import ActivityListItem from './activity-list-item.jsx'

class AuthHome extends React.Component {
  static onActivityLoadError(error) {
    console.error('failed to load annual activity', error)
  }

  constructor(props) {
    super(props)
    this.state = {
      isFitbitAuthenticated: LocalStorage.get('isFitbitAuthenticated'),
      activities: null
    }
  }

  componentDidMount() {
    if (this.state.isFitbitAuthenticated) {
      const api = new FitswarmApi()
      api.getFoursquareAnnualActivity().
          then(activities => this.onActivityLoaded(activities)).
          catch(err => AuthHome.onActivityLoadError(err))
    }
  }

  onActivityLoaded(activities) {
    this.setState({ activities })
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
    const { isFitbitAuthenticated, activities } = this.state

    if (!isFitbitAuthenticated) {
      return this.fitbitLogin()
    }

    return (
      <section className="section">
        <div className="container content">
          <h3 className="subtitle is-3">Activity for the last year:</h3>
          <div id="activity-chart-container">
            {activities ? (
              <div>
                <ActivityChart
                  activities={activities}
                />
                <ul>
                  {activities.map(activity => (
                    <ActivityListItem
                      key={activity.date}
                      {...activity}
                    />
                  ))}
                </ul>
              </div>
            ) : 'Loading...'}
          </div>
        </div>
      </section>
    )
  }
}

AuthHome.propTypes = {
}

export default AuthHome

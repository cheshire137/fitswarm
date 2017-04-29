import PropTypes from 'prop-types'

const AnonHome = function(props) {
  return (
    <section className="section">
      <div className="content container has-text-centered">
        <p>
          <a
            href="/users/auth/foursquare"
            className="button is-large"
          >Sign in with Foursquare</a>
        </p>
        <p className="subtitle">Correlate your Fitbit activity with Swarm gym visits.</p>
      </div>
    </section>
  )
}

AnonHome.propTypes = {
}

export default AnonHome

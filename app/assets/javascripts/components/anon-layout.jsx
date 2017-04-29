import PropTypes from 'prop-types'

const AnonLayout = function(props) {
  const path = props.location.pathname
  return (
    <div className="layout-container">
      <div className="container">
        <nav className="nav">
          <div className="nav-right">
            <a
              href="/users/auth/foursquare"
              className="nav-item"
            >Sign in with Foursquare</a>
          </div>
        </nav>
      </div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <a href="/">Fitswarm</a>
            </h1>
            <h2 className="subtitle">
              Correlate Fitbit activity with Swarm gym visits.
            </h2>
          </div>
        </div>
      </section>
      <div className="layout-children-container">
        {props.children}
      </div>
    </div>
  )
}

AnonLayout.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default AnonLayout

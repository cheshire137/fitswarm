import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return (
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
    )
  }
}

Header.propTypes = {
}

export default Header

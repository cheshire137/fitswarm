import PropTypes from 'prop-types'

import LocalStorage from '../models/local-storage'

class AuthLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: LocalStorage.get('email'),
      authenticityToken: LocalStorage.get('authenticity-token')
    }
  }

  render() {
    const path = this.props.location.pathname
    return (
      <div className="layout-container">
        <div className="container">
          <nav className="nav">
            <div className="nav-right">
              <span
                className="nav-item"
              >{this.state.email}</span>
              <form
                action="/users/sign_out"
                method="post"
                className="nav-item"
              >
                <input name="_method" type="hidden" value="delete" />
                <input name="authenticity_token" type="hidden" value={this.state.authenticityToken} />
                <button
                  className="button is-link"
                  type="submit"
                >Sign out</button>
              </form>
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
          {this.props.children}
        </div>
      </div>
    )
  }
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default AuthLayout

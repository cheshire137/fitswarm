import PropTypes from 'prop-types'

class MainNav extends React.Component {
  authenticatedNav() {
    const { email, authenticityToken } = this.props

    return (
      <div className="nav-right">
        <span
          className="nav-item"
        >{email}</span>
        <form
          action="/users/sign_out"
          method="post"
          className="nav-item"
        >
          <input name="_method" type="hidden" value="delete" />
          <input name="authenticity_token" type="hidden" value={authenticityToken} />
          <button
            className="button is-link"
            type="submit"
          >Sign out</button>
        </form>
      </div>
    )
  }

  authStatus() {
    const { authPath, email } = this.props

    if (email && email.length > 0) {
      return this.authenticatedNav()
    }

    return (
      <div className="nav-right">
        <a
          href={authPath}
          className="nav-item"
        >Sign in with Foursquare</a>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <nav className="nav">
          {this.authStatus()}
        </nav>
      </div>
    )
  }
}

MainNav.propTypes = {
  authPath: PropTypes.string.isRequired,
  email: PropTypes.string,
  authenticityToken: PropTypes.string.isRequired
}

export default MainNav

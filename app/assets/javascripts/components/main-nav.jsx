import PropTypes from 'prop-types'

class MainNav extends React.Component {
  authStatus() {
    const { authPath, email } = this.props
    if (email && email.length > 0) {
      return (
        <span
          className="nav-item"
        >Signed in as {email}</span>
      )
    }
    return (
      <a
        href={authPath}
        className="nav-item"
      >Sign in with Foursquare</a>
    )
  }

  render() {
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav-right nav-menu">
            {this.authStatus()}
          </div>
        </nav>
      </div>
    )
  }
}

MainNav.propTypes = {
  authPath: PropTypes.string.isRequired,
  email: PropTypes.string
}

export default MainNav

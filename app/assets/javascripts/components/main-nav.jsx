import PropTypes from 'prop-types'

class MainNav extends React.Component {
  render() {
    const { authPath, email } = this.props
    if (email && email.length > 0) {
      return (
        <span>Signed in as <strong>{email}</strong></span>
      )
    }
    return (
      <a
        href={authPath}
        className="nav-item"
      >Sign in with Foursquare</a>
    )
  }
}

MainNav.propTypes = {
  authPath: PropTypes.string.isRequired,
  email: PropTypes.string
}

export default MainNav

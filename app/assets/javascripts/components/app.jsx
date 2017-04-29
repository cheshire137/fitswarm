import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    const { authPath } = this.props
    return (
      <a
        href={authPath}
        className="nav-item"
      >Sign in with Foursquare</a>
    )
  }
}

App.propTypes = {
  authPath: PropTypes.string.isRequired
}

export default App

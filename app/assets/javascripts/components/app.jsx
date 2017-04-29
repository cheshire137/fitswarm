import PropTypes from 'prop-types'
import MainNav from './main-nav.jsx'

class App extends React.Component {
  render() {
    const { authPath, email } = this.props
    return <MainNav email={email} authPath={authPath} />
  }
}

App.propTypes = {
  authPath: PropTypes.string.isRequired,
  email: PropTypes.string
}

export default App

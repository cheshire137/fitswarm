import PropTypes from 'prop-types'
import Header from './header.jsx'
import MainNav from './main-nav.jsx'

class App extends React.Component {
  render() {
    const { authPath, email } = this.props
    return (
      <div>
        <MainNav email={email} authPath={authPath} />
        <Header />
      </div>
    )
  }
}

App.propTypes = {
  authPath: PropTypes.string.isRequired,
  email: PropTypes.string
}

export default App

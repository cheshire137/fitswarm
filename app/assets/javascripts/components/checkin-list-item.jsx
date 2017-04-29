import PropTypes from 'prop-types'

import FitswarmApi from '../models/fitswarm-api'
import LocalStorage from '../models/local-storage'

class CheckinListItem extends React.Component {
  getTimestamp() {
    const date = new Date(this.props.createdAt * 1000)
    return `${date.toLocaleDateString()}`
  }

  render() {
    const { venue, activities } = this.props
    console.log(this.getTimestamp(), activities)
    return (
      <li>
        <strong className="venue-name">{venue.name}</strong>
        &mdash; <span> {activities.summary.steps}</span> step(s)
        on <time>{this.getTimestamp()}</time>
      </li>
    )
  }
}

CheckinListItem.propTypes = {
  createdAt: PropTypes.number.isRequired,
  venue: PropTypes.object.isRequired,
  activities: PropTypes.object.isRequired
}

export default CheckinListItem

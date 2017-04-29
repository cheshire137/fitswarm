import PropTypes from 'prop-types'

import FitswarmApi from '../models/fitswarm-api'
import LocalStorage from '../models/local-storage'

class ActivityListItem extends React.Component {
  getTimestamp() {
    const date = new Date(this.props.date)
    return date.toLocaleDateString()
  }

  render() {
    const { checkin, stepCount } = this.props

    if (checkin) {
      return (
        <li>
          Visited
          <strong className="venue-name"> {checkin.venue.name} </strong>
          on <time>{this.getTimestamp()}</time>
          {stepCount ? (
            <span>&mdash; {stepCount} steps</span>
          ) : ''}
        </li>
      )
    }

    return (
      <li>
        <time>{this.getTimestamp()}</time>
        {stepCount ? (
          <span>&mdash; {stepCount} steps</span>
        ) : ''}
      </li>
    )
  }
}

ActivityListItem.propTypes = {
  date: PropTypes.string.isRequired,
  checkin: PropTypes.object,
  stepCount: PropTypes.number
}

export default ActivityListItem

import PropTypes from 'prop-types'

class StepLabel extends React.Component {
  getLabel() {
    const { value } = this.props

    if (value >= 1000) {
      return `${Math.round(value / 1000)}k`
    }

    return value
  }

  render () {
    const { x, y, stroke } = this.props

    return (
      <text
        x={x}
        y={y}
        dy={-4}
        fill={stroke}
        fontSize={10}
        textAnchor="middle"
      >{this.getLabel()}</text>
    )
  }
}

StepLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  stroke: PropTypes.string,
  value: PropTypes.number
}

export default StepLabel

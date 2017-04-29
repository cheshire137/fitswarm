import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

class ActivityChart extends React.Component {
  getData() {
    const { activities } = this.props
    const months = {}
    const data = []
    for (let i = 0; i < activities.length; i++) {
      const month = activities[i].month
      const stepCount = activities[i].stepCount

      if (months.hasOwnProperty(month)) {
        months[month] += stepCount
      } else {
        months[month] = stepCount
      }
    }
    console.log('months', months)
    for (const month in months) {
      data.push({ month: month, stepCount: months[month] })
    }
    data.reverse()
    console.log('data', data)
    return data
  }

  render() {
    const width = document.getElementById('activity-chart-container').clientWidth
    const data = this.getData()

    return (
      <LineChart width={width} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="stepCount"
        />
      </LineChart>
    )
  }
}

ActivityChart.propTypes = {
  activities: PropTypes.array.isRequired
}

export default ActivityChart

import moment from 'moment'

const format = date => moment(date).utc().format('YYYY-MM-DD')

export default format

module.exports = {
  meta: {
    from: 'prod'
  },
  data: {
    API: {
      BASE_URL: 'http://localhost:8181/api'
    },
    DEBUG: {
      ENABLED: true,
      REDUX: true,
      API: true
    }
  }
}

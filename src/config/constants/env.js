module.exports = {
  API: {
    BASE_URL: 'http://localhost:8181/api',
    REQUEST_TIMEOUT: 15000,
    REQUEST_DELAY: 500,
  },
  DEBUG: {
    ENABLED: true,
    REDUX: true,
    API: true,
    SAND_CASTLE_LOGGER: {
      HOST: 'localhost',
      PORT: 3009,
      TOKEN: 'pakixpress-web',
    },
  },
}

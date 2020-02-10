let apiUrl
const apiUrls = {
  production: 'https://beta.dholcutzradio.com/api',
  development: 'https://beta.dholcutzradio.com/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default {
  apiUrl,
  token: process.env.REACT_APP_AZURACAST_TOKEN
}
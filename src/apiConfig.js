let apiUrl
const apiUrls = {
  production: 'https://demo.azuracast.com/api',
  development: 'https://demo.azuracast.com/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
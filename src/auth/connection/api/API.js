import axios from 'axios'

export default axios.create({
  baseURL: `http://localhost/previous/marketplace/api/gbook-api/api/`
})
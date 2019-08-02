import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appBNGFU3NQ5tnUMT/Projects"
});

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY || AIRTABLEKEY}

export default{
  getProjects() {
  	return Axios.get("?view=Most%20Recent%20Posts")
  },
  getProject(slug) {
  	return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}


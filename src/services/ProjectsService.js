import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appBNGFU3NQ5tnUMT/Projects"
});

const airtableAPIKey = process.env.AIRTABLEKEY || process.env.VUE_APP_AIRTABLEKEY

console.log(airtableAPIKey)

Axios.defaults.headers.common = {'Authorization': `Bearer ` + airtableAPIKey}


export default{
  getProjects() {
  	return Axios.get("?view=Most%20Recent%20Posts")
  },
  getProject(slug) {
  	return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}


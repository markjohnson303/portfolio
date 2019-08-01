

// api key keyAskbDof1VmSk0H

// app id appBNGFU3NQ5tnUMT

// const URL = 



import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appBNGFU3NQ5tnUMT/Projects?view=Most%20Recent%20Posts"
});

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY || AIRTABLEKEY}

export default{

  getProjects() {
  	return Axios.get()
  }
}


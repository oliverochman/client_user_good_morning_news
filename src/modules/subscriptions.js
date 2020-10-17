import axios from "axios";
import  getAuthHeaders  from './auth'

const Subscriptions = {
  async create(stripeToken) {
    let response
    try {
      const result = await axios.post("/subscriptions", {
        stripeToken: stripeToken
      }, {
        headers: getAuthHeaders()
      })
      debugger
      response = { success: true, message: result.data.message }
    } catch (error) {debugger
      response = { success: false, message: error.response.data.message }
    } finally {debugger
      return response
    }
  }
}

export default Subscriptions;
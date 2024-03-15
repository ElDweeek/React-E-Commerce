import axios from "axios"
import { apiUrl } from "./apiConfig"


const engProductsApi = async () => {
  const response = await axios.get(`${apiUrl}/engProducts`)
  return response.data
}

export default engProductsApi;
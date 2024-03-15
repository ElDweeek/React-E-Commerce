import axios from "axios"
import { apiUrl } from "./apiConfig"


const authorsApi = async () => {
  const response = await axios.get(`${apiUrl}/authors`)
  console.log(response.data)
  return response.data
}

export default authorsApi;
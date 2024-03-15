import axios from "axios"
import { apiUrl } from "./apiConfig";

const arProductsApi = async () => {
  const response = await axios.get(`${apiUrl}/arProducts`)
  return response.data
}

export default arProductsApi;
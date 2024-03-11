import axios from "axios"


const arProductsApi = async () => {
  const response = await axios.get("http://localhost:4000/arProducts")
  return response.data
}

export default arProductsApi;
import axios from "axios"


const engProductsApi = async () => {
  const response = await axios.get("http://localhost:4000/engProducts")
  return response.data
}

export default engProductsApi;
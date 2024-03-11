import axios from "axios"


const authorsApi = async () => {
  const response = await axios.get("http://localhost:4000/authors")
  console.log(response.data)
  return response.data
}

export default authorsApi;
import axios from 'axios'

export const fetchAllRecipes = async () => {
  const response = await axios.get('http://localhost:3000/api/recipes')
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  console.log(response.data)
  return response.data
}
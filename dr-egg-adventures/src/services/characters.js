import axios from 'axios'
const baseURL = "/"

const getAll = () => {
    return axios.get(baseURL + "characters")          
                .then(res => res.data)
}
export default (getAll)
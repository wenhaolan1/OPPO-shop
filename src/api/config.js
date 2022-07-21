import axios from 'axios'

export const baseUrl = "https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/api/request";
const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~~')
    }
)

export { axiosInstance }
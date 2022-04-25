import axios from "axios";
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
    timeout: 5000,
});

requests.interceptors.request.use((config)=>{
    NProgress().start();
    return config;
});

requests.interceptors.response.use((res) => {
    NProgress().done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error("failed"));
})

export default axios;
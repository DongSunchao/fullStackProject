import { message } from 'antd';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.settings.showSpinner = false;

const request = axios.create({
    baseURL: "http://dida100.com:8888/",
    timeout: 10000,
});
request.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');//const? let?
    NProgress.start();
    if (token) {
        config.headers["Authorization"]="Bearer "+token;
    }
    return config;
});
request.interceptors.response.use(
    (res) => {
        NProgress.done();
        if (res.status !== 200) {
            if (res.status === 401) {
                message.info("Unauthorized error");

            } else if (res.status === 500) {
                message.info("Internal server error");
            } else if (res.status === 404) {
                message.info("Resource not found");
            } else {
                message.error("ÇëÇóÊ§°Ü");
                return Promise.reject(res);
            }
        }
        return res;
    },
    (err) => {
        NProgress.done();
        message.info("request fila");
        console.error(err);
        return err;
    });
export default request;
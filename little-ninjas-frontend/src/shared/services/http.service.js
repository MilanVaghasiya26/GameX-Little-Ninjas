import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken } from './auth.service';

import { getUrl } from '../../shared/constants/api';

const axiosInstance = axios.create();
const CancelToken = axios.CancelToken;
let cancel_req;

export { cancel_req };

/**
 * get method
 * @param request object containing axios params
 */
const get = (url, params = {}, otherData = {}) =>
    commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });

/**
 * post method
 * @param request object containing axios params
 */
const post = (url, params = {}, otherData = {}) =>
    commonAxios({
        method: 'POST',
        url: getUrl(url),
        data: params,
        ...otherData,
    });

/**
 * put method
 * @param request object containing axios params
 */
const put = (url, params = {}, otherData = {}) =>
    commonAxios({
        method: 'PUT',
        url: getUrl(url),
        data: params,
        ...otherData,
    });

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url, params = {}, otherData = {}) =>
    commonAxios({
        method: 'DELETE',
        url: getUrl(url),
        data: params,
        ...otherData,
    });

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url, params = {}, otherData = {}) =>
    commonAxios({
        method: 'PATCH',
        url: getUrl(url),
        data: params,
        ...otherData,
    });

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type, isLogin
 */
const commonAxios = ({
    method,
    url,
    data,
    contentType = 'application/json',
}) => {
    const headers = {
        'Content-Type': contentType,
    };

    const token = getAccessToken();
    if (token) {
        headers['x-access-token'] = `${token}`;
    }

    let body = null;

    if (contentType === 'application/json') {
        body = JSON.stringify(data);
    } else {
        body = data;
    }

    return new Promise((resolve, reject) => {
        axiosInstance({
            method: method,
            url: url,
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel_req = c;
            }),
            headers: headers,
            data: body,
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { axiosInstance };

const HttpService = {
    get: get,
    post: post,
    put: put,
    deleteRequest: deleteRequest,
    patch: patch,
};

export default HttpService;

import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

import { API_BASE_URL } from './index';

export const API_CONFIG = {
    path: {
        identifyObject: 'identify/get-random-data',
        postObjectData: 'identify/validate',
        countingobject: 'counting/get-random-data',
        postCountingData: 'counting/validate',
        userData: 'user/register',
        mathObject: 'maths/get-random-data/addition',
        substractionObject: 'maths/get-random-data/subtraction',
        multiplicationObject: 'maths/get-random-data/multiplication',
        divisionobject: 'maths/get-random-data/division',
        postAddData: 'maths/validate',
    },
};

export const getUrl = (url, params = {}) => {
    Object.keys(params).forEach(
        (key) =>
            (params[key] == null || params[key] === '') && delete params[key]
    );
    if (url.includes('http')) {
        return url;
    }
    let urlString = `${API_BASE_URL}/${url}`;
    if (params && !isEmpty(params)) {
        urlString += `?${queryString.stringify(params)}`;
    }
    return urlString;
};

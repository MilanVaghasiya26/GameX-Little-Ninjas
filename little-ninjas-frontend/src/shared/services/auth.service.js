import CryptoJS from 'crypto-js';
const KEY = process.env.REACT_APP_ENCRYPTION_KEY;
/**
 * function to check if user is logged in or not
 */
export const checkLogin = () => {
    if (localStorage.authData) {
        return true;
    } else {
        return false;
    }
};
/**
 * function to get authentication data
 */
export const getAuthData = () => {
    try {
        const data = localStorage.authData;
        if (data) {
            const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            return decryptedData;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};
/**
 * function to set user authentication data
 */
export const setAuthData = (data) => {
    const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), KEY);
    localStorage.setItem('authData', cipherText.toString());
};
/**
 * function to get user access token
 */
export const getAccessToken = () => {
    const data = getAuthData();
    if (data && data.token) {
        return data.token;
    } else {
        return '';
    }
};
/**
 * function to get user id
 */
export const getUserId = () => {
    const data = getAuthData();
    if (data && data.userId) {
        return data.userId;
    } else {
        return '';
    }
};
/**
 * function to remove user authentication data
 */
export const removeAuthData = () => {
    localStorage.removeItem('authData');
};

import Axios from "axios";

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} method 
 */
export const fetchLoading = async ({
    url,
    data,
    method
    }) => {
    return await Axios({
        url,
        data,
        method
    }).then(result => result)
    .catch(e => e)
}
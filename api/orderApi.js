import apiManager from "./apiManager";

const getOrders = async (userId, token) => {
    const response = await apiManager.get(`/order/${userId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

module.exports = {
    getOrders
}
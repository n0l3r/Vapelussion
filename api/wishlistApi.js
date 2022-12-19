import apiManager from "./apiManager";

const getWishlist = async (userId, token) => {
    const response = await apiManager.get(`/wishlist/${userId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const addToWishlist = async (data, token) => {
    const response = await apiManager.post('/wishlist/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

const deleteWishlist = async (userId, wishlistId, token) => {
    const response = await apiManager.delete(`/wishlist/delete/${userId}/${wishlistId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const checkWithWishlist = async ( userId, productId, token) => {
    const response = await apiManager.get(`/wishlist/check/${userId}/${productId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

export {
    getWishlist,
    addToWishlist,
    deleteWishlist,
    checkWithWishlist
}
import apiManager from "./apiManager";

const getCartByUserId = async (userId, token) => {
    const response = await apiManager.get(`/carts/${userId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const addToCart = async (data, token) => {
    const response = await apiManager.post('/carts/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

const deleteCart = async (cartId, token) => {
    console.log(cartId);
    const response = await apiManager.delete(`/carts/delete/${cartId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const updateCart = async (data, cartId, token) => {
    console.log(data);
    const response = await apiManager.put(`/carts/update/${cartId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        data: data
    });
    console.log(response.data);
    return ({data: response.data, status: response.status});
}

const checkoutCart = async (userId, token) => {
    const response = await apiManager.delete(`/carts/checkout/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}



export {
    getCartByUserId,
    addToCart,
    deleteCart,
    updateCart,
    checkoutCart
}
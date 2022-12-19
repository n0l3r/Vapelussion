import apiManager from "./apiManager";

const getProductsByCategory = async (categoryId, token) => {
    // console.log(token);
    const response = await apiManager.get(`/products/category/${categoryId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const getProductsById = async (productId, token) => {
    const response = await apiManager.get(`/products/${productId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}


export {
    getProductsByCategory,
    getProductsById
}
